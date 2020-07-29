<template>
  <div class="index" v-loading="loading" style="min-height:100vh">
    <div class="header">
      <img class="line1" src="../assets/img/line.png" alt="" />
      <img class="line2" src="../assets/img/line.png" alt="" />
      <img class="line3" src="../assets/img/line.png" alt="" />
      <img class="line4" src="../assets/img/line.png" alt="" />
      <!-- <div class="headerText">周计划和日计划完成情况</div> -->
      <div class="companyName">
        <img src="../assets/img/logo.png" alt="" />
        永茂泰模具工厂
      </div>
      <div class="title">生产进度看板</div>
      <div class="date">
        {{ date }}
      </div>
    </div>
    <div class="content">
      <!-- 模具生产进度 -->
      <div class="chartCard cardbig" style="width: 70vw;">
        <img class="leftTop" src="../assets/img/border1.png" alt="" />
        <img class="rightTop" src="../assets/img/border2.png" alt="" />
        <img class="rightbottom" src="../assets/img/border3.png" alt="" />
        <img class="leftBottom" src="../assets/img/border4.png" alt="" />
        <div class="bigTitle">项目生产进度</div>
        <div id="topChart" style="height:37vh"></div>
      </div>
      <!-- 未开工项目 -->
      <div class="chartCard cardbig" style="width: 25vw;">
        <img class="leftTop" src="../assets/img/border1.png" alt="" />
        <img class="rightTop" src="../assets/img/border2.png" alt="" />
        <img class="rightbottom" src="../assets/img/border3.png" alt="" />
        <img class="leftBottom" src="../assets/img/border4.png" alt="" />
        <div class="bigTitle">未开工项目</div>
        <div
          class="lineChart"
          id="leftChart"
          style="top: 0.4rem;padding: 10px;height: 33vh;overflow:auto;"
        >
          <div
            style="position: unset"
            v-for="(item, index) in charData.unActive"
            :key="index"
          >
            项目编号：{{ item }}
          </div>
        </div>
      </div>
      <!-- 加工部品进度 -->
      <div class="chartCard cardbig" style="width: 96vw">
        <img class="leftTop" src="../assets/img/border1.png" alt="" />
        <img class="rightTop" src="../assets/img/border2.png" alt="" />
        <img class="rightbottom" src="../assets/img/border3.png" alt="" />
        <img class="leftBottom" src="../assets/img/border4.png" alt="" />
        <div class="bigTitle">加工部品进度</div>
        <div v-if="charData" style="padding: 0px 10px;margin-top: -10px;">
          模具编号：{{ charData.procedures[bootomIndex].name }}
        </div>
        <div
          class="lineChart"
          id="rightChart"
          style="height:37vh;width:100%"
        ></div>
      </div>
    </div>
    <div v-if="bottomTitle" class="bottomTitle">
      <marquee>
        {{ bottomTitle }}
      </marquee>
    </div>
  </div>
</template>

<script>
import $axios from "axios";
import lineOption from "../js/echartOption";
import barOption from "../js/barOption";
import hengBarOption from "../js/hengBarOption";
export default {
  name: "index",
  data() {
    return {
      date: "",
      week: {
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        0: "日"
      },
      charData: "",
      timer: null,
      bottomTitle: "",
      timerouter: null,
      loading: true,
      bootomDataTimer: null,
      bootomIndex: 0
    };
  },
  created() {
    this.setFontSize(document, window);
    this.timer = setInterval(() => {
      this.getDate();
    }, 1000);
  },
  mounted() {
    let self = this;
    if (
      window.localStorage.getItem("progress") == "undefined" ||
      window.localStorage.getItem("progress") == ""
    ) {
      this.getChartData2();
    } else {
      this.charData = JSON.parse(window.localStorage.getItem("progress"));
      this.getChartData();
    }
    // this.timerouter = setTimeout(() => {
    //   self.$router.push({ path: "/" });
    // }, 60000);
  },
  destroyed() {
    //清除定时器
    // clearInterval(this.timerouter);
    clearInterval(this.bootomDataTimer);
  },
  methods: {
    // 自适应rem
    setFontSize: function(doc, win) {
      var docEl = doc.documentElement;
      var resizeEvt =
        "orientationchange" in window ? "orientationchange" : "resize";
      var reCaculate = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 1920) + "px";
      };
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, reCaculate, false);
      doc.addEventListener("DOMContentLoaded", reCaculate, false);
    },
    // 动态时间
    getDate: function() {
      let self = this;
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let week = date.getDay();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      let nowDete = `${year}年${month}月${day}日 星期${self.week[week]} ${hour}:${minute}:${second}`;
      self.date = nowDete;
    },
    getChartData2: function() {
      $axios.get("http://118.190.37.4:9001/app/rest/dashboard/project").then(
        function(res) {
          if (res.data.code == 200) {
            this.charData = res.data.data
            this.getChartData();
          }
        }.bind(this)
      );
    },
    getChartData: function() {
      console.log(this.charData)
      if (this.charData) {
        this.loading = false;
        this.bottomTitle = this.charData.title;
        this.drawsmall();
        this.drawsmall2(this.bootomIndex);
        this.bootomDataTimer = setInterval(() => {
          this.bootomIndex++;
          this.drawsmall2(this.bootomIndex);
        }, 10000);
      }
    },
    drawsmall2(index) {
      if (!this.charData.procedures[index]) {
        this.$router.push({ path: "/" });
        return
      }
      // if (!this.charData.procedures[index]) {
      //   window.localStorage.setItem("progress", "");
      //   this.$router.go(0);
      // }
      let time = 0;
      let ydata = [];
      let xdata = [];
      let blue = [];
      let green = [];
      let yellow = [];
      let blueData = [];
      let yellowData = [];
      let greenData = [];
      let rightChart = this.$echarts.init(
        document.getElementById("rightChart")
      );
      this.charData.procedures[index].orders.forEach(element => {
        blueData.push(element.blue.join("   ｜  "));
        greenData.push(element.green.join("  ｜  "));
        yellowData.push(element.yellow.join("  ｜  "));
      });
      this.charData.procedures[index].orders.forEach(element => {
        ydata.push(element.procedure);
      });
      this.charData.procedures[index].orders.forEach(element => {
        blue.push(element.blue.length);
        green.push(element.green.length);
        yellow.push(element.yellow.length);
      });
      let self = this;
      xdata.push({
        name: "已完工",
        stack: "总量",
        type: "bar",
        barWidth: "25",
        label: {
          show: true,
          position: "inside",
          formatter: function(params) {
            return greenData[params.dataIndex];
          }
        },
        data: green
      });
      xdata.push({
        name: "进行中",
        stack: "总量",
        type: "bar",
        barWidth: "25",
        label: {
          show: true,
          position: "inside",
          formatter: function(params) {
            return yellowData[params.dataIndex];
          }
        },
        data: yellow
      });
      xdata.push({
        name: "未开始",
        stack: "总量",
        type: "bar",
        barWidth: "25",
        label: {
          show: true,
          position: "inside",
          formatter: function(params) {
            return blueData[params.dataIndex];
          }
        },
        data: blue
      });

      rightChart.setOption(hengBarOption(xdata, ydata));
    },
    drawsmall() {
      let topChart = this.$echarts.init(document.getElementById("topChart"));
      topChart.setOption(
        barOption(
          this.charData.projectSchedule.projectNo,
          this.charData.projectSchedule.schedule
        )
      );
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.81rem;
  background: url(../assets/img/headbg.png);
  background-size: 100% 100%;
  position: relative;
  margin-bottom: 0.2rem;
}
.line1 {
  position: absolute;
  top: 0.26rem;
  left: 3rem;
  width: 2rem;
}
.line2 {
  position: absolute;
  top: 0.51rem;
  left: 8.7rem;
  width: 2rem;
}
.line3 {
  position: absolute;
  top: 0.26rem;
  left: 14rem;
  width: 2rem;
}
.line4 {
  position: absolute;
  top: 0.26rem;
  right: -0.2rem;
  width: 2rem;
}
.date {
  font-size: 0.27rem;
  position: absolute;
  top: 0.09rem;
  right: 0.4rem;
  background: linear-gradient(to right, #22ec95, #03c2fa);
  -webkit-background-clip: text;
  color: transparent;
}
.companyName {
  font-size: 0.27rem;
  position: absolute;
  top: 0.09rem;
  left: 0.4rem;
  background: linear-gradient(to right, #22ec95, #03c2fa);
  -webkit-background-clip: text;
  color: transparent;
}
.companyName img {
  width: 0.3rem;
}
.title {
  background: linear-gradient(to right, #22ec95, #03c2fa);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 0.35rem;
  position: absolute;
  top: 0.2rem;
  left: 8.6rem;
}

.content {
  position: relative;
  padding: 0rem 0.2rem;
}
.centre {
  width: 6.89rem;
  height: 6.89rem;
  position: absolute;
  left: calc(50% - 3.44rem);
  top: 0rem;
  background: url(../assets/img/centerbg.png);
  background-size: 120% 120%;
  background-position: -0.7rem -0.5rem;
}
.cardbig {
  border: 1px solid #5a9bf5;
  width: 31.3vw;
  margin: 5px;
  height: 37vh;
  margin-bottom: 0.2rem;
  float: left;
}
.chartCard {
  position: relative;
}
.lineChart {
  position: absolute;
  top: 0px;
  left: 0px;
}
.chartCard img.rightbottom {
  position: absolute;
  left: -0.04rem;
  top: -0.04rem;
  width: 0.5rem;
}
.chartCard img.leftTop {
  position: absolute;
  right: -0.04rem;
  top: -0.04rem;
  width: 0.5rem;
}
.chartCard img.leftBottom {
  position: absolute;
  left: -0.04rem;
  bottom: -0.04rem;
  width: 0.5rem;
}
.chartCard img.rightTop {
  position: absolute;
  right: -0.04rem;
  bottom: -0.04rem;
  width: 0.5rem;
}
.headerText {
  width: 2.75rem;
  height: 0.37rem;
  background: url(../assets/img/headerText.png);
  background-size: 100% 100%;
  position: absolute;
  top: 0.57rem;
  left: 0.2rem;
  text-align: center;
  font-size: 0.18rem;
  line-height: 0.4rem;
}
.bigTitle {
  text-align: center;
  margin: auto;
  width: 3.75rem;
  height: 0.37rem;
  font-size: 0.18rem;
  background-image: url(../assets/img/headerText.png);
  background-size: 100% 100%;
  line-height: 0.38rem;
}
.bottomTitle {
  margin: auto;
  width: 70%;
  text-align: center;
  font-size: 24px;
}
.bottomTitle marquee {
  display: inline-block;
  /* color: transparent;
  background: linear-gradient(to right, #22ec95, #03c2fa);
  -webkit-background-clip: text; */
  /* border: 2px solid white; */
  padding: 0.3rem 4rem;
}
</style>
