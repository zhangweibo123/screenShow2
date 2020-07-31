<template>
  <div class="index" v-loading="loading" style="min-height:100vh">
    <my-header
      title="模具车间设备OEE"
      @sleep="sleep()"
      @start="start()"
    ></my-header>
    <div class="content">
      <div
        v-for="(value, key, index) in charData"
        :key="index"
        class="chartCard cardbig"
      >
        <img class="leftTop" src="../assets/img/border1.png" alt="" />
        <img class="rightTop" src="../assets/img/border2.png" alt="" />
        <img class="rightbottom" src="../assets/img/border3.png" alt="" />
        <img class="leftBottom" src="../assets/img/border4.png" alt="" />
        <div class="bigTitle">{{ key }}</div>
        <div
          :id="'lineChart' + index"
          class="lineChart"
          style="height:25vh"
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
import oeedata from "../js/oeeData";
import myHeader from "./header";
export default {
  name: "index",
  components: {
    "my-header": myHeader
  },
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
      charData2: "",
      timer: null,
      bottomTitle: "",
      timerouter: null,
      loading: true
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
    this.getChartData();
    this.getChartData2();
    //  this.timerouter = setTimeout(() => {
    //   self.$router.push({ path:'/progress'})
    // }, 60000);
  },
  destroyed() {
    //清除定时器
    // clearInterval(this.timerouter);
  },
  methods: {
    sleep() {
      clearInterval(this.timerouter);
      this.timerouter = null;
    },
    start() {
      this.timerouter = setTimeout(() => {
        self.$router.push({ path: "/progress" });
      }, 60000);
    },
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
    getChartData: function() {
      $axios.get("http://118.190.37.4:9001/app/rest/dashboard/oee").then(
        function(res) {
          this.loading = false;
          this.bottomTitle = res.data.data.title;
          delete res.data.data.title;
          this.charData = res.data.data;
          console.log(this.charData);
          this.drawsmall();
        }.bind(this)
      );

      // console.log(oeedata)
      // this.charData = oeedata.data;
      this.$nextTick(() => {
        this.drawsmall();
      });
    },
    getChartData2: function() {
      $axios.get("http://118.190.37.4:9001/app/rest/dashboard/project").then(
        function(res) {
          this.charData2 = res.data.data;
          window.localStorage.setItem(
            "progress",
            JSON.stringify(this.charData2)
          );
        }.bind(this)
      );
    },
    drawsmall() {
      let self = this;
      let index = 0;
      for (let item in this.charData) {
        let lineClorle = "";
        if (index == 0 || index == 3 || index == 6) {
          lineClorle = "blue";
        } else if (index == 1 || index == 4 || index == 7) {
          lineClorle = "orange";
        } else if (index == 2 || index == 5 || index == 8) {
          lineClorle = "green";
        }
        let echartName = "lineChart" + index;
        this.$nextTick(() => {
          let spliceDate = [];
          this.charData[item].date.forEach(element => {
            spliceDate.push(element.substring(5, 7));
          });
          echartName = this.$echarts.init(document.getElementById(echartName));
          echartName.setOption(
            lineOption(spliceDate, this.charData[item].oee, lineClorle)
          );
        });
        index++;
      }
    }
  }
};
</script>

<style scoped>
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
  height: 24vh;
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
  width: 30vw;
  height: 18vh;
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
  /* color:transparent; */
  /* background: linear-gradient(to right, #22ec95, #03c2fa); */
  /* -webkit-background-clip: text; */
  padding: 0.3rem 4rem;
}
</style>
