<template>
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
    <div class="btngroup">
      <el-button
        type="primary"
        v-if="!isShowStop"
        @click="start()"
        icon="el-icon-video-pause"
      ></el-button>
      <el-button
        type="primary"
        v-if="isShowStop"
        @click="sleep()"
        icon="el-icon-video-play"
      ></el-button>
      <el-button type="primary" @click="prev()" icon="el-icon-back"></el-button>
      <el-button
        type="primary"
        @click="next()"
        icon="el-icon-right"
      ></el-button>
      <el-button
        type="primary"
        v-if="$route.path == '/progress'"
        icon="el-icon-d-arrow-left"
        @click="progressPrev()"
      ></el-button>
      <el-button
        type="primary"
        v-if="$route.path == '/progress'"
        icon="el-icon-d-arrow-right"
        @click="progressNext()"
      ></el-button>
    </div>
    <!-- 每日开动率（OEE）目标，实际? -->
    <div class="title">{{ title }}</div>
    <div class="date">
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  name: "myheader",
  props: ["title"],
  data() {
    return {
      date: "",
      isShowStop: true,
      week: {
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        0: "日"
      }
    };
  },
  created() {
    this.setFontSize(document, window);
    this.timer = setInterval(() => {
      this.getDate();
    }, 1000);
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
    start() {
      this.isShowStop = true;
      this.$emit("start");
    },
    sleep() {
      this.isShowStop = false;
      this.$emit("sleep");
    },
    next() {
      if (this.$route.path == "/progress") {
        this.$router.push({ path: "/oeeDay" });
      } else if (this.$route.path == "/oeeDay") {
        this.$router.push({ path: "/progress" });
      } else if (this.$route.path == "/oeemonth") {
        this.$router.push({ path: "/oeeDay" });
      } else if (this.$route.path == "/") {
        this.$router.push({ path: "/progress" });
      }
    },
    progressNext() {
      this.$emit("progressNext");
    },
    progressPrev() {
      this.$emit("progressPrev")
    },
    prev() {
      if (this.$route.path == "/progress") {
        this.$router.push({ path: "/oeeDay" });
      } else if (this.$route.path == "/oeeDay") {
        this.$router.push({ path: "/progress" });
      } else if (this.$route.path == "/oeemonth") {
        this.$router.push({ path: "/oeeDay" });
      } else if (this.$route.path == "/") {
        this.$router.push({ path: "/progress" });
      }
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
.title {
  background: linear-gradient(to right, #22ec95, #03c2fa);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 0.35rem;
  position: absolute;
  top: 0.2rem;
  left: 50%;
  transform: translate(-50%, 0);
}
.btngroup {
  position: absolute;
  top: 0.1rem;
  left: 3rem;
}
.btngroup .el-button {
  padding: 1px 8px;
  font-size: 10px;
  margin-right: 1px;
  font-weight: 900;
  background: #0f8cff;
}
.el-button:focus {
  border: 2px solid rgb(238, 178, 66)!important;
}
</style>
