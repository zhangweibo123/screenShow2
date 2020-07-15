<template>
  <div class="index">
      <div class="header">
          <img class="line1" src="../assets/img/line.png" alt="">
          <img class="line2" src="../assets/img/line.png" alt="">
          <img class="line3" src="../assets/img/line.png" alt="">
          <img class="line4" src="../assets/img/line.png" alt="">
          <!-- <div class="headerText">周计划和日计划完成情况</div> -->
          <div class="date">
             {{date}}
           </div>
           <div class="title">模具车间设备OEE</div>
      </div>
      <div class="content">
          <div class="centre">
              <div id="chartCenter" style="width: 3.2rem;height: 3.2rem;margin-top: 1.84rem;margin-left:2rem;float: left;"></div>
              <div  v-if="charData">
                   <span style="position: absolute;font-size: 0.25rem;top: 2.75rem;left: 3rem;">本周已完成</span>
                   <span style="position: absolute;font-size: 0.2rem;top: 4.6rem;left:2.9rem;">周计划 :</span>
                   <span class="textCenter" style="font-size: 0.64rem;;top: 3.1rem;left: 2.9rem;position: absolute;">{{charData.allWeekPlanMap.finished}}</span>
                   <span style="position: absolute;font-size: 0.26rem;top: 4.56rem;left: 3.7rem;">{{charData.allWeekPlanMap.plan}}</span>
              </div>
          </div>
          <div>
              <div class="chartCard cardsmall">
                  <img class="leftTop" src="../assets/img/border1.png" alt="">
                  <img class="rightTop" src="../assets/img/border2.png" alt="">
                  <img class="rightbottom" src="../assets/img/border3.png" alt="">
                  <img class="leftBottom" src="../assets/img/border4.png" alt="">
                  <div style="width: 100%;font-size: 0.2rem;color: #0B8CFF;padding-top: 0.06rem;padding-left: 0.4rem;">C10 产线</div>
                  <div id="smallChart1" style="width: 1.1rem;height: 1.1rem;margin-top: 0.1rem;margin-left: 0.8rem;float: left;"></div>
                  <div id="smallChart2"  style="width: 1.1rem;height: 1.1rem;margin-top: 0.1rem;margin-left: 1.5rem;float: left;"></div>
                  <div class="smallTextContent" v-if="charData">
                       <span class="inlineBlock" style="position: absolute;top: 0.7rem;left: 1.07rem;font-size: 0.24rem;">{{Number(charData.planTofinishMap.C10.weekPlan.finished)  + Number(charData.planTofinishMap.C10.weekPlan.unFinished)}}</span>
                       <span class="inlineBlock" style="position: absolute;top: 1.1rem;left: 1.07rem;font-size: 0.09rem;">周计划</span>
                       <span style="color: #0B8CFF;font-size: 0.2rem;position: absolute;top: 0.5rem;left: 2.1rem;">{{charData.planTofinishMap.C10.weekPlan.finished}}个</span>
                       <span style="color: white;font-size: 0.12rem;position: absolute;top: 0.8rem;left: 2.1rem;">已完成</span>
                       <span style="color: white;font-size: 0.2rem;position: absolute;top: 1.05rem;left: 2.1rem;">{{charData.planTofinishMap.C10.weekPlan.unFinished}}个</span>
                       <span style="color: white;font-size: 0.12rem;position: absolute;top: 1.28rem;left: 2.1rem;">未完成</span>

                       <span class="inlineBlock" style="position: absolute;top: 0.7rem;left: 3.68rem;font-size: 0.24rem;">{{Number(charData.planTofinishMap.C10.dayPlan.finished)  + Number(charData.planTofinishMap.C10.dayPlan.unFinished)}}</span>
                       <span class="inlineBlock" style="position: absolute;top: 1.1rem;left: 3.68rem;font-size: 0.09rem;">日计划</span>
                       <span style="color: #0B8CFF;font-size: 0.2rem;position: absolute;top: 0.5rem;left: 4.7rem;">{{charData.planTofinishMap.C10.dayPlan.finished}}个</span>
                       <span style="color: white;font-size: 0.12rem;position: absolute;top: 0.8rem;left: 4.7rem;">已完成</span>
                       <span style="color: white;font-size: 0.2rem;position: absolute;top: 1.05rem;left: 4.7rem;">{{charData.planTofinishMap.C10.dayPlan.unFinished}}个</span>
                       <span style="color: white;font-size: 0.12rem;position: absolute;top: 1.28rem;left: 4.7rem;">未完成</span>
                  </div>
              </div>
              <div class="chartCard cardsmall">
                  <img class="leftTop" src="../assets/img/border1.png" alt="">
                  <img class="rightTop" src="../assets/img/border2.png" alt="">
                  <img class="rightbottom" src="../assets/img/border3.png" alt="">
                  <img class="leftBottom" src="../assets/img/border4.png" alt="">
                   <div style="width: 100%;font-size: 0.2rem;color: #04D7F9 ;padding-top: 0.06rem;padding-left: 0.4rem;">C13 产线</div>
                   <div id="smallChart3" style="width: 1.1rem;height: 1.1rem;margin-top: 0.1rem;margin-left: 0.8rem;float: left;"></div>
                   <div id="smallChart4"  style="width: 1.1rem;height: 1.1rem;margin-top: 0.1rem;margin-left: 1.5rem;float: left;"></div>
                   <div class="smallTextContent" v-if="charData">
                        <span class="inlineBlock" style="position: absolute;top: 0.7rem;left: 1.07rem;font-size: 0.24rem;">{{Number(charData.planTofinishMap.C13.weekPlan.finished)  + Number(charData.planTofinishMap.C13.weekPlan.unFinished)}}</span>
                        <span class="inlineBlock" style="position: absolute;top: 1.1rem;left: 1.1rem;font-size: 0.09rem;">周计划</span>
                        <span style="color: #0B8CFF;font-size: 0.2rem;position: absolute;top: 0.5rem;left: 2.1rem;">{{charData.planTofinishMap.C13.weekPlan.finished}}个</span>
                        <span style="color: white;font-size: 0.12rem;position: absolute;top: 0.8rem;left: 2.1rem;">已完成</span>
                        <span style="color: white;font-size: 0.2rem;position: absolute;top: 1.05rem;left: 2.1rem;">{{charData.planTofinishMap.C13.weekPlan.unFinished}}个</span>
                        <span style="color: white;font-size: 0.12rem;position: absolute;top: 1.28rem;left: 2.1rem;">未完成</span>

                        <span class="inlineBlock" style="position: absolute;top: 0.7rem;left: 3.68rem;font-size: 0.24rem;">{{Number(charData.planTofinishMap.C13.dayPlan.finished)  + Number(charData.planTofinishMap.C13.dayPlan.unFinished)}}</span>
                        <span class="inlineBlock" style="position: absolute;top: 1.1rem;left: 3.68rem;font-size: 0.09rem;">日计划</span>
                        <span style="color: #0B8CFF;font-size: 0.2rem;position: absolute;top: 0.5rem;left: 4.7rem;">{{charData.planTofinishMap.C13.dayPlan.finished}}个</span>
                        <span style="color: white;font-size: 0.12rem;position: absolute;top: 0.8rem;left: 4.7rem;">已完成</span>
                        <span style="color: white;font-size: 0.2rem;position: absolute;top: 1.05rem;;left: 4.7rem;">{{charData.planTofinishMap.C13.dayPlan.unFinished}}个</span>
                        <span style="color: white;font-size: 0.12rem;position: absolute;top: 1.28rem;left: 4.7rem;">未完成</span>
                   </div>
              </div>
              <div class="chartCard cardsmall">
                  <img class="leftTop" src="../assets/img/border1.png" alt="">
                  <img class="rightTop" src="../assets/img/border2.png" alt="">
                  <img class="rightbottom" src="../assets/img/border3.png" alt="">
                  <img class="leftBottom" src="../assets/img/border4.png" alt="">
                   <div style="width: 100%;font-size: 0.2rem;color: #5B37CD ;padding-top: 0.06rem;padding-left: 0.4rem;">CSS45T3 产线</div>
                   <div id="smallChart5" style="width: 1.1rem;height: 1.1rem;margin-top: 0.1rem;margin-left: 0.8rem;float: left;"></div>
                   <div id="smallChart6"  style="width: 1.1rem;height: 1.1rem;margin-top: 0.1rem;margin-left: 1.5rem;float: left;"></div>
                   <div class="smallTextContent" v-if="charData">
                        <span class="inlineBlock" style="position: absolute;top: 0.7rem;left: 1.07rem;font-size: 0.24rem;">{{Number(charData.planTofinishMap.CSS45T3.weekPlan.finished)  + Number(charData.planTofinishMap.CSS45T3.weekPlan.unFinished)}}</span>
                        <span class="inlineBlock" style="position: absolute;top: 1.1rem;left: 1.07rem;font-size: 0.09rem;">周计划</span>
                        <span style="color: #0B8CFF;font-size: 0.2rem;position: absolute;top: 0.5rem;left: 2.1rem;">{{charData.planTofinishMap.CSS45T3.weekPlan.finished}}个</span>
                        <span style="color: white;font-size: 0.12rem;position: absolute;top: 0.8rem;left: 2.1rem;">已完成</span>
                        <span style="color: white;font-size: 0.2rem;position: absolute;top: 1.05rem;left: 2.1rem;">{{charData.planTofinishMap.CSS45T3.weekPlan.unFinished}}个</span>
                        <span style="color: white;font-size: 0.12rem;position: absolute;top: 1.28rem;left: 2.1rem;">未完成</span>

                        <span  class="inlineBlock" style="position: absolute;top: 0.7rem;left: 3.68rem;font-size: 0.24rem;">{{Number(charData.planTofinishMap.CSS45T3.dayPlan.finished)  + Number(charData.planTofinishMap.CSS45T3.dayPlan.unFinished)}}</span>
                        <span  class="inlineBlock" style="position: absolute;top: 1.1rem;left: 3.7rem;font-size: 0.09rem;">周计划</span>
                        <span style="color: #0B8CFF;font-size: 0.2rem;position: absolute;top: 0.5rem;left: 4.7rem;">{{charData.planTofinishMap.CSS45T3.dayPlan.finished}}个</span>
                        <span style="color: white;font-size: 0.12rem;position: absolute;top: 0.8rem;left: 4.7rem;">已完成</span>
                        <span style="color: white;font-size: 0.2rem;position: absolute;top: 1.05rem;;left: 4.7rem;">{{charData.planTofinishMap.CSS45T3.dayPlan.unFinished}}个</span>
                        <span style="color: white;font-size: 0.12rem;position: absolute;top: 1.28rem;left: 4.7rem;">未完成</span>
                   </div>
              </div>
          </div>
          <div style="position: absolute;right: 0.2rem;top: 0rem;">
              <div class="chartCard cardcenter">
                  <img class="leftTop" src="../assets/img/border1.png" alt="">
                  <img class="rightTop" src="../assets/img/border2.png" alt="">
                  <img class="rightbottom" src="../assets/img/border3.png" alt="">
                  <img class="leftBottom" src="../assets/img/border4.png" alt="">
                  <div class="cenTitle">目标达成率</div>
                  <div id="centerChart1" style="width: 5.6rem;height: 2.3rem;margin-left: 0.1rem;margin-top: 0.05rem;"></div>
              </div>
              <div class="chartCard cardcenter">
                  <img class="leftTop" src="../assets/img/border1.png" alt="">
                  <img class="rightTop" src="../assets/img/border2.png" alt="">
                  <img class="rightbottom" src="../assets/img/border3.png" alt="">
                  <img class="leftBottom" src="../assets/img/border4.png" alt="">
                  <div class="cenTitle">不良率分析</div>
                  <div id="centerChart2" style="width: 5.6rem;height: 2.3rem;margin-left: 0.1rem;margin-top: 0.05rem;"></div>
              </div>
          </div>
          <div style="position: absolute;left: 0.2rem;width: 98%;">
              <div class="chartCard cardbig">
                  <img class="leftTop" src="../assets/img/border1.png" alt="">
                  <img class="rightTop" src="../assets/img/border2.png" alt="">
                  <img class="rightbottom" src="../assets/img/border3.png" alt="">
                  <img class="leftBottom" src="../assets/img/border4.png" alt="">
                  <div class="bigTitle">近一周内计划产量和实际产量</div>
                  <div id="bigchartLeft" style="width: 9.4rem;height: 3rem;margin-top: 0.2rem;margin-left: 0.02rem;"></div>
              </div>
              <div class="chartCard cardbig" style="float: right;">
                  <img class="leftTop" src="../assets/img/border1.png" alt="">
                  <img class="rightTop" src="../assets/img/border2.png" alt="">
                  <img class="rightbottom" src="../assets/img/border3.png" alt="">
                  <img class="leftBottom" src="../assets/img/border4.png" alt="">
                  <div class="bigTitle">加工不良和毛坯不良占比</div>
                  <div id="bigchart1" style="width: 2.6rem;height:1.5rem;margin-top: 1.1rem;float: left;margin-left: 0.4rem;"></div>
                  <div id="bigchart2" style="width: 2.6rem;height:1.5rem;margin-top: 1.1rem;float: left;margin-left: 0.4rem;"></div>
                  <div id="bigchart3" style="width: 2.6rem;height:1.5rem;margin-top: 1.1rem;float: left;margin-left: 0.4rem;"></div>
                  <div>
                      <span style="position: absolute;top: 1rem;left: 1.5rem;font-size: 0.2rem;color: #0B8CFF;">C10</span>
                      <span style="position: absolute;top: 1rem;left: 4.5rem;font-size: 0.2rem;color: #04D7F9;">C13</span>
                      <span style="position: absolute;top: 1rem;left: 7.2rem;font-size: 0.2rem;color: #5B37CD;">CSS45T3</span>
                      <div v-if="charData" style="font-size: 0.1rem;position: absolute;top: 3.1rem;left: 1rem;">
                        <p>加工不良 数量{{charData.rejectRatioMap.C10.processReject.number}} 占比:{{charData.rejectRatioMap.C10.processReject.ratio}}</p>
                        <p>毛坯不良 数量{{charData.rejectRatioMap.C10.workBlankReject.number}} 占比:{{charData.rejectRatioMap.C10.workBlankReject.ratio}}</p>
                      </div>
                     <div v-if="charData" style="font-size: 0.1rem;position: absolute;top: 3.1rem;left: 4rem;">
                        <p>加工不良 数量{{charData.rejectRatioMap.C13.processReject.number}} 占比:{{charData.rejectRatioMap.C13.processReject.ratio}}</p>
                        <p>毛坯不良 数量{{charData.rejectRatioMap.C13.workBlankReject.number}} 占比:{{charData.rejectRatioMap.C13.workBlankReject.ratio}}</p>
                      </div>
                      <div v-if="charData" style="font-size: 0.1rem;position: absolute;top: 3.1rem;left: 7rem;">
                        <p>加工不良 数量{{charData.rejectRatioMap.CSS45T3.processReject.number}} 占比:{{charData.rejectRatioMap.CSS45T3.processReject.ratio}}</p>
                        <p>毛坯不良 数量{{charData.rejectRatioMap.CSS45T3.workBlankReject.number}} 占比:{{charData.rejectRatioMap.CSS45T3.workBlankReject.ratio}}</p>
                      </div>
                      <div style="position: absolute;left: 5rem;top: 0.7rem;vertical-align: bottom;">
                        <span style="display: inline-block;float: left ;font-size: 0.14rem;line-height: 0.14rem;margin-right: 0.2rem;">毛坯不良</span>
                        <span style="display: inline-block;width: 0.14rem;height: 0.14rem;float: left ;background: #70e1ff ;border-radius: 2px;margin-right: 0.1rem;"></span>
                        <span style="display: inline-block;width: 0.14rem;height: 0.14rem;float: left ;background: #b9eb78 ;border-radius: 2px;margin-right: 0.1rem;"></span>
                        <span style="display: inline-block;width: 0.14rem;height: 0.14rem;float: left ;background: #4693eb ;border-radius: 2px;margin-right: 0.1rem;"></span>
                        <span style="display: inline-block;width: 0.14rem;height: 0.14rem;float: left ;background: #f5a41f ;border-radius: 2px;margin-right: 0.1rem;"></span>
                        <span style="display: inline-block;width: 0.14rem;height: 0.14rem;float: left ;background: #f3e60e ;border-radius: 2px;margin-right: 0.1rem;"></span>
                        <span style="display: inline-block;width: 0.14rem;height: 0.14rem;float: left ;background: #d23878 ;border-radius: 2px;margin-right: 0.1rem;"></span>
                        <span style="display: inline-block;float: left ;font-size: 0.14rem;margin-right: 0.2rem;line-height: 0.14rem;">加工不良</span>
                        <span style="display: inline-block;width: 0.14rem;height: 0.14rem;float: left ;background: #00d8ff ;border-radius: 2px;margin-right: 0.1rem;"></span>
                        <span style="display: inline-block;width: 0.14rem;height: 0.14rem;float: left ;background: #900ffd ;border-radius: 2px;margin-right: 0.1rem;"></span>
                        <span style="display: inline-block;width: 0.14rem;height: 0.14rem;float: left ;background: #34dab2 ;border-radius: 2px;margin-right: 0.1rem;"></span>
                        <span style="display: inline-block;width: 0.14rem;height: 0.14rem;float: left ;background: #4898c9 ;border-radius: 2px;margin-right: 0.1rem;"></span>
                      </div>
                  </div>

              </div>
          </div>


      </div>
  </div>
</template>

<script>
import $axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      date:'',
      week:{
        1:'一',
        2:'二',
        3:'三',
        4:'四',
        5:'五',
        6:'六',
        0:'日',
      },
      charData:'',
      timer:null
    }
  },
  created(){
    this.setFontSize(document, window)
    this.timer = setInterval(() => {
        this.getDate()
    }, 1000)
  },
  mounted(){
    let self = this
    this.getChartData()
    this.socker()
    setInterval(() => {
        self.getChartData()
    }, 60000)
  },
  methods:{
        socker : function(){
            var hostname = '118.190.37.4',
                port = 15675,
                path = '/ws',
                clientId = 'client-mao2080',
                timeout = 5,
                keepAlive = 100,
                cleanSession = false,
                ssl = false,
            client = new Paho.Client(hostname, port,path, clientId);
             client.connect({
               userName: 'admin',
               password: 'tripllen@602',
               useSSL : true,
               onSuccess(){
                 console.log('success')
               },
               onFailure(){
                 console.log('failed')
               }
             })
        },
        // 自适应rem
        setFontSize: function (doc, win) {
          var docEl = doc.documentElement
          var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
          var reCaculate = function () {
          var clientWidth = docEl.clientWidth
          if (!clientWidth) return
            docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px'
          }
          if (!doc.addEventListener) return
          win.addEventListener(resizeEvt, reCaculate, false)
          doc.addEventListener('DOMContentLoaded', reCaculate, false)
        },
        // 动态时间
        getDate: function(){
            let self = this
            let date = new Date();
            let year=date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let week = date.getDay();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            let nowDete = `${year}年${month}月${day}日 星期${self.week[week]} ${hour}:${minute}:${second}`
            self.date = nowDete
          },
        getChartData:function(){
          $axios.get('http://118.190.37.4:8020/app/rest/v2/services/ymt_ProduceDashboardService/getDashBoardData').then(function(res){
            // $axios.get('https://atomtran.com:8443/app/rest/v2/services/mes_ProduceDashboardService/getDashBoardData').then(function(res){
              // this.charData = res.data.data
              this.charData = JSON.parse(res.data).data
              console.log(this.charData)
              this.drawsmall();
          }.bind(this))
        },
         drawsmall(){
              let self = this
              let smallChart1 = this.$echarts.init(document.getElementById('smallChart1'))
              let smallChart2 = this.$echarts.init(document.getElementById('smallChart2'))
              let smallChart3 = this.$echarts.init(document.getElementById('smallChart3'))
              let smallChart4 = this.$echarts.init(document.getElementById('smallChart4'))
              let smallChart5 = this.$echarts.init(document.getElementById('smallChart5'))
              let smallChart6 = this.$echarts.init(document.getElementById('smallChart6'))
              let bigchart1 = this.$echarts.init(document.getElementById('bigchart1'))
              let bigchart2 = this.$echarts.init(document.getElementById('bigchart2'))
              let bigchart3 = this.$echarts.init(document.getElementById('bigchart3'))
              let bigchartLeft = this.$echarts.init(document.getElementById('bigchartLeft'))
              let centerChart1 = this.$echarts.init(document.getElementById('centerChart1'))
              let centerChart2 = this.$echarts.init(document.getElementById('centerChart2'))
              let chartCenter = this.$echarts.init(document.getElementById('chartCenter'))

              // let x = self.charData.allWeekPlanMap.finished
              // let y = self.charData.allWeekPlanMap.plan - self.charData.allWeekPlanMap.finished
              if(self.charData.allWeekPlanMap.plan == 0){
                  var x = 0
                  var y = 10
                  var z = 10
              }else{
                  var x = self.charData.allWeekPlanMap.finished
                  var y = self.charData.allWeekPlanMap.plan - self.charData.allWeekPlanMap.finished
                  var z = 30*(x + y)/106

              }
              console.log()
              chartCenter.setOption({
                  series: [
                            {
                                type:'pie',
                                radius: ['72%', '99%'],
                                hoverOffset: 1,
                                 startAngle:233,
                                labelLine: {normal: {show: false}},
                                data:[
                                    {value:x, name:'',itemStyle:{color:'#62ABFF'}},
                                    {value:y, name:'',itemStyle:{color:'rgba(0,0,0,0)'}},
                                    {value:z, name:'',itemStyle:{color:'rgba(0,0,0,0)'}},
                                ]
                            }
                      ]
             });
             let smallChart1data = ''
             if(self.charData.planTofinishMap.C10.weekPlan.finished == 0 && self.charData.planTofinishMap.C10.weekPlan.unFinished == 0){
               smallChart1data = [
                    {value:self.charData.planTofinishMap.C10.weekPlan.finished, name:'已完成',itemStyle:{color:'#415695'}},
                ]
             }else{
               smallChart1data = [
                    {value:self.charData.planTofinishMap.C10.weekPlan.finished, name:'已完成',itemStyle:{color:'#62ABFF'}},
                    {value:self.charData.planTofinishMap.C10.weekPlan.unFinished, name:'未完成',itemStyle:{color:'white'}},
                ]
             }
             smallChart1.setOption({
                  series: [
                            {
                                type:'pie',
                                radius: ['90%', '99%'],
                                hoverOffset: 1,
                                labelLine: {normal: {show: false}},
                                data:smallChart1data
                            }
                      ]
             });
             let smallChart2data = ''
             if(self.charData.planTofinishMap.C10.dayPlan.finished == 0 && self.charData.planTofinishMap.C10.dayPlan.unFinished == 0){
               smallChart2data = [
                    {value:self.charData.planTofinishMap.C10.dayPlan.finished, name:'已完成',itemStyle:{color:'#415695'}},
                ]
             }else{
               smallChart2data = [
                    {value:self.charData.planTofinishMap.C10.dayPlan.finished, name:'已完成',itemStyle:{color:'#62ABFF'}},
                    {value:self.charData.planTofinishMap.C10.dayPlan.unFinished, name:'未完成',itemStyle:{color:'white'}},
                ]
             }
             smallChart2.setOption({
                  series: [
                            {
                                type:'pie',
                                radius: ['90%', '99%'],
                                hoverOffset: 1,
                                labelLine: {normal: {show: false}},
                                data:smallChart2data
                            }
                      ]
             });
             let smallChart3data = ''
             if(self.charData.planTofinishMap.C13.weekPlan.finished == 0 && self.charData.planTofinishMap.C13.weekPlan.unFinished == 0){
               smallChart3data = [
                    {value:self.charData.planTofinishMap.C13.weekPlan.finished, name:'已完成',itemStyle:{color:'#415695'}},
                ]
             }else{
               smallChart3data = [
                    {value:self.charData.planTofinishMap.C13.weekPlan.finished, name:'已完成',itemStyle:{color:'#62ABFF'}},
                    {value:self.charData.planTofinishMap.C13.weekPlan.unFinished, name:'未完成',itemStyle:{color:'white'}},
                ]
             }
             smallChart3.setOption({
                  series: [
                            {
                                type:'pie',
                                radius: ['90%', '99%'],
                                hoverOffset: 1,
                                labelLine: {normal: {show: false}},
                                data:smallChart3data
                            }
                      ]
             });
             let smallChart4data = ''
             if(self.charData.planTofinishMap.C13.dayPlan.finished == 0 && self.charData.planTofinishMap.C13.dayPlan.unFinished == 0){
               smallChart4data = [
                    {value:self.charData.planTofinishMap.C13.dayPlan.finished, name:'已完成',itemStyle:{color:'#415695'}},
                ]
             }else{
               smallChart4data = [
                    {value:self.charData.planTofinishMap.C13.dayPlan.finished, name:'已完成',itemStyle:{color:'#62ABFF'}},
                    {value:self.charData.planTofinishMap.C13.dayPlan.unFinished, name:'未完成',itemStyle:{color:'white'}},
                ]
             }
             smallChart4.setOption({
                  series: [
                            {
                                type:'pie',
                                radius: ['90%', '99%'],
                                hoverOffset: 1,
                                labelLine: {normal: {show: false}},
                                data:smallChart4data
                            }
                      ]
             });
             let smallChart5data = ''
             if(self.charData.planTofinishMap.CSS45T3.weekPlan.finished == 0 && self.charData.planTofinishMap.CSS45T3.weekPlan.unFinished == 0){
               smallChart5data = [
                    {value:self.charData.planTofinishMap.CSS45T3.weekPlan.finished, name:'已完成',itemStyle:{color:'#415695'}},
                ]
             }else{
               smallChart5data = [
                    {value:self.charData.planTofinishMap.CSS45T3.weekPlan.finished, name:'已完成',itemStyle:{color:'#62ABFF'}},
                    {value:self.charData.planTofinishMap.CSS45T3.weekPlan.unFinished, name:'未完成',itemStyle:{color:'white'}},
                ]
             }
             smallChart5.setOption({
                  series: [
                            {
                                type:'pie',
                                radius: ['90%', '99%'],
                                hoverOffset: 1,
                                labelLine: {normal: {show: false}},
                                data:smallChart5data
                            }
                      ]
             });
             let smallChart6data = ''
             if(self.charData.planTofinishMap.CSS45T3.dayPlan.finished == 0 && self.charData.planTofinishMap.CSS45T3.dayPlan.unFinished == 0){
               smallChart6data = [
                    {value:self.charData.planTofinishMap.CSS45T3.dayPlan.finished, name:'已完成',itemStyle:{color:'#415695'}},
                ]
             }else{
               smallChart6data = [
                    {value:self.charData.planTofinishMap.CSS45T3.dayPlan.finished, name:'已完成',itemStyle:{color:'#62ABFF'}},
                    {value:self.charData.planTofinishMap.CSS45T3.dayPlan.unFinished, name:'未完成',itemStyle:{color:'white'}},
                ]
             }
             smallChart6.setOption({
                  series: [
                            {
                                type:'pie',
                                radius: ['90%', '99%'],
                                hoverOffset: 1,
                                labelLine: {normal: {show: false}},
                                data:smallChart6data
                            }
                      ]
             });
             let bigchart1data = ''
             if(self.charData.rejectRatioMap.C10.processReject.detailNumber.length == 0 && self.charData.rejectRatioMap.C10.workBlankReject.detailNumber.length == 0){
               bigchart1data = [
                  {value:1,itemStyle:{color:'#415695 '}},
                 ]
             }else{
               bigchart1data = [
                                  {value:parseInt(self.charData.rejectRatioMap.C10.processReject.detailNumber[0]), name:self.charData.rejectRatioMap.C10.processReject.detailType[0],itemStyle:{color:'#6ae7fb '}},
                                  {value:parseInt(self.charData.rejectRatioMap.C10.processReject.detailNumber[1]), name:self.charData.rejectRatioMap.C10.processReject.detailType[1],itemStyle:{color:'#b9eb78 '}},
                                  {value:parseInt(self.charData.rejectRatioMap.C10.processReject.detailNumber[2]), name:self.charData.rejectRatioMap.C10.processReject.detailType[2],itemStyle:{color:'#4190dd '}},
                                  {value:parseInt(self.charData.rejectRatioMap.C10.processReject.detailNumber[3]), name:self.charData.rejectRatioMap.C10.processReject.detailType[3],itemStyle:{color:'#ecab35 '}},
                                  {value:parseInt(self.charData.rejectRatioMap.C10.processReject.detailNumber[4]), name:self.charData.rejectRatioMap.C10.processReject.detailType[4],itemStyle:{color:'#f9a62e '}},
                                  {value:parseInt(self.charData.rejectRatioMap.C10.workBlankReject.detailNumber[0]), name:self.charData.rejectRatioMap.C10.workBlankReject.detailType[0],itemStyle:{color:'#f5e120 '}},
                                  {value:parseInt(self.charData.rejectRatioMap.C10.workBlankReject.detailNumber[1]), name:self.charData.rejectRatioMap.C10.workBlankReject.detailType[1],itemStyle:{color:'#d43670 '}},
                                  {value:parseInt(self.charData.rejectRatioMap.C10.workBlankReject.detailNumber[2]), name:self.charData.rejectRatioMap.C10.workBlankReject.detailType[2],itemStyle:{color:'#0ed4ef '}},
                                  {value:parseInt(self.charData.rejectRatioMap.C10.workBlankReject.detailNumber[3]), name:self.charData.rejectRatioMap.C10.workBlankReject.detailType[3],itemStyle:{color:'#25e7a0 '}},
                                  {value:parseInt(self.charData.rejectRatioMap.C10.workBlankReject.detailNumber[4]), name:self.charData.rejectRatioMap.C10.workBlankReject.detailType[4],itemStyle:{color:'#39a1c4 '}},
                              ]
             }
             bigchart1.setOption({
                  series: [
                            {
                                type:'pie',
                                radius : ['90%', '75%'],
                                hoverOffset: 1,
                                label: {
                                    show:false
                                },
                                data:bigchart1data
                            }
                      ]
             });
             let bigchart2data = ''
             if(self.charData.rejectRatioMap.C13.processReject.detailNumber.length == 0 && self.charData.rejectRatioMap.C13.workBlankReject.detailNumber.length == 0){
               bigchart2data = [
                  {value:1,itemStyle:{color:'#415695 '}},
                 ]
             }else{
               bigchart2data = [
                                 {value:parseInt(self.charData.rejectRatioMap.C13.processReject.detailNumber[0]), name:self.charData.rejectRatioMap.C13.processReject.detailType[0],itemStyle:{color:'#6ae7fb '}},
                                 {value:parseInt(self.charData.rejectRatioMap.C13.processReject.detailNumber[1]), name:self.charData.rejectRatioMap.C13.processReject.detailType[1],itemStyle:{color:'#b9eb78 '}},
                                 {value:parseInt(self.charData.rejectRatioMap.C13.processReject.detailNumber[2]), name:self.charData.rejectRatioMap.C13.processReject.detailType[2],itemStyle:{color:'#4190dd '}},
                                 {value:parseInt(self.charData.rejectRatioMap.C13.processReject.detailNumber[3]), name:self.charData.rejectRatioMap.C13.processReject.detailType[3],itemStyle:{color:'#ecab35 '}},
                                 {value:parseInt(self.charData.rejectRatioMap.C13.processReject.detailNumber[4]), name:self.charData.rejectRatioMap.C13.processReject.detailType[4],itemStyle:{color:'#f9a62e '}},
                                 {value:parseInt(self.charData.rejectRatioMap.C13.workBlankReject.detailNumber[0]), name:self.charData.rejectRatioMap.C13.workBlankReject.detailType[0],itemStyle:{color:'#f5e120 '}},
                                 {value:parseInt(self.charData.rejectRatioMap.C13.workBlankReject.detailNumber[1]), name:self.charData.rejectRatioMap.C13.workBlankReject.detailType[1],itemStyle:{color:'#d43670 '}},
                                 {value:parseInt(self.charData.rejectRatioMap.C13.workBlankReject.detailNumber[2]), name:self.charData.rejectRatioMap.C13.workBlankReject.detailType[2],itemStyle:{color:'#0ed4ef '}},
                                 {value:parseInt(self.charData.rejectRatioMap.C13.workBlankReject.detailNumber[3]), name:self.charData.rejectRatioMap.C13.workBlankReject.detailType[3],itemStyle:{color:'#25e7a0 '}},
                                 {value:parseInt(self.charData.rejectRatioMap.C13.workBlankReject.detailNumber[4]), name:self.charData.rejectRatioMap.C13.workBlankReject.detailType[4],itemStyle:{color:'#39a1c4 '}},
                              ]
             }
             bigchart2.setOption({
                  series: [
                            {
                                type:'pie',
                                hoverOffset: 1,
                                labelLine : {
                                    normal : {
                                      length :10,
                                      length2 : 10,
                                    },
                                },
                                // label: {
                                //     fontSize : 10,
                                // },
                                label: {
                                    show:false
                                },
                                radius : ['90%', '75%'],
                                data:bigchart2data
                            }
                      ]
             });
             let bigchart3data = ''
             if(self.charData.rejectRatioMap.CSS45T3.processReject.detailNumber.length == 0 && self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailNumber.length == 0){
               bigchart3data = [
                  {value:1,itemStyle:{color:'#415695 '}},
                 ]
             }else{
               bigchart3data = [
                                    {value:parseInt(self.charData.rejectRatioMap.CSS45T3.processReject.detailNumber[0]), name:self.charData.rejectRatioMap.CSS45T3.processReject.detailType[0],itemStyle:{color:'#6ae7fb '}},
                                    {value:parseInt(self.charData.rejectRatioMap.CSS45T3.processReject.detailNumber[1]), name:self.charData.rejectRatioMap.CSS45T3.processReject.detailType[1],itemStyle:{color:'#b9eb78 '}},
                                    {value:parseInt(self.charData.rejectRatioMap.CSS45T3.processReject.detailNumber[2]), name:self.charData.rejectRatioMap.CSS45T3.processReject.detailType[2],itemStyle:{color:'#4190dd '}},
                                    {value:parseInt(self.charData.rejectRatioMap.CSS45T3.processReject.detailNumber[3]), name:self.charData.rejectRatioMap.CSS45T3.processReject.detailType[3],itemStyle:{color:'#ecab35 '}},
                                    {value:parseInt(self.charData.rejectRatioMap.CSS45T3.processReject.detailNumber[4]), name:self.charData.rejectRatioMap.CSS45T3.processReject.detailType[4],itemStyle:{color:'#f9a62e '}},

                                    {value:parseInt(self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailNumber[0]), name:self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailType[0],itemStyle:{color:'#f5e120 '}},
                                    {value:parseInt(self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailNumber[1]), name:self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailType[1],itemStyle:{color:'#d43670 '}},
                                    {value:parseInt(self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailNumber[2]), name:self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailType[2],itemStyle:{color:'#0ed4ef '}},
                                    {value:parseInt(self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailNumber[3]), name:self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailType[3],itemStyle:{color:'#25e7a0 '}},
                                    {value:parseInt(self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailNumber[4]), name:self.charData.rejectRatioMap.CSS45T3.workBlankReject.detailType[4],itemStyle:{color:'#39a1c4 '}},
                                ]
             }
             bigchart3.setOption({
                  series: [
                            {
                                type:'pie',
                                hoverOffset: 1,
                                labelLine : {
                                   normal : {
                                     length : 10,
                                     length2 : 10,
                                   },
                                },
                                // label: {
                                //    fontSize : 10,
                                // },
                                label: {
                                    show:false
                                },
                                radius : ['90%', '75%'],
                                data:bigchart3data
                            }
                      ]
             });
             let leftChartArr = []
             this.charData.sevenDaysDataMap.date.forEach(function(item,index){
                  leftChartArr.push({
                    value:item,
                    textStyle:{color:'white'}
                  })
             })
             let serveChartArr = []
             if(self.charData.sevenDaysDataMap.finished_C10.length > 0){
               serveChartArr.push(
                     {
                         name:'C10(实际产量)',
                         type:'bar',
                         stack: 'C10',
                         data:self.charData.sevenDaysDataMap.finished_C10,
                         itemStyle:{color:'#0B8CFF'}
                     },
                     {
                         name:'C10(计划产量)',
                         type:'bar',
                         stack: 'C10',
                         data:self.charData.sevenDaysDataMap.plan_C10,
                         itemStyle:{color:'#22E8A0'}
                     })
             }
             if(self.charData.sevenDaysDataMap.finished_C13.length > 0){
                serveChartArr.push(
                    {
                         name:'C13(实际产量)',
                         type:'bar',
                         stack: 'C13',
                         data:self.charData.sevenDaysDataMap.finished_C13,
                         itemStyle:{color:'#04D7F9'}
                     },
                     {
                         name:'C13(计划产量)',
                         type:'bar',
                         stack: 'C13',
                         data:self.charData.sevenDaysDataMap.plan_C13,
                         itemStyle:{color:'#22E8A0'}
                     },
                )
             }
             if(self.charData.sevenDaysDataMap.finished_CSS45T3.length > 0){
                serveChartArr.push(
                    {
                         name:'CSS45T3(实际产量)',
                         type:'bar',
                         stack: 'CSS45T3',
                         data:self.charData.sevenDaysDataMap.finished_CSS45T3,
                         itemStyle:{color:'#5B37CD'}
                     },
                     {
                         name:'CSS45T3(计划产量)',
                         type:'bar',
                         stack: 'CSS45T3',
                         data:self.charData.sevenDaysDataMap.plan_CSS45T3,
                         itemStyle:{color:'#22E8A0'}
                     }
                )
             }
             bigchartLeft.setOption({
                  tooltip : {
                         trigger: 'axis',
                         axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                             type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                         }
                     },
                     legend: {
                         data:['C10(实际产量)','C13(实际产量)','CSS45T3(实际产量)'],
                         textStyle:{color:'white',fontSize:'10'}
                     },
                     grid: {
                       top: '16%',
                         left: '3%',
                         right: '4%',
                         bottom: '3%',
                         containLabel: true
                     },
                     xAxis : [
                         {
                             type : 'category',
                             data :leftChartArr
                         },
                     ],
                     yAxis : [
                         {
                           type : 'value',
                          axisLabel : {
                                  textStyle: {
                                      color: '#fff'
                                  }
                              }
                         },

                     ],

                     series : serveChartArr
             });
             centerChart1.setOption({
                     tooltip : {
                         trigger: 'axis',
                         axisPointer: {
                             type: 'cross',
                             label: {
                                 backgroundColor: '#6a7985'
                             }
                         }
                     },
                     legend: {
                         data:['C10','C13','CSS45T3'],
                         textStyle:{color:'white',fontSize:'10'}
                     },
                     grid: {
                         top: '17%',
                         left: '3%',
                         right: '4%',
                         bottom: '3%',
                         containLabel: true
                     },
                     xAxis : [
                         {
                             type : 'category',
                             boundaryGap : false,
                             data :[
                               {value:self.charData.targetRatioMap.date[0],textStyle:{color:'white'}},
                               {value:self.charData.targetRatioMap.date[1],textStyle:{color:'white'}},
                               {value:self.charData.targetRatioMap.date[2],textStyle:{color:'white'}},
                               {value:self.charData.targetRatioMap.date[3],textStyle:{color:'white'}},
                               {value:self.charData.targetRatioMap.date[4],textStyle:{color:'white'}},
                               {value:self.charData.targetRatioMap.date[5],textStyle:{color:'white'}},
                               {value:self.charData.targetRatioMap.date[6],textStyle:{color:'white'}},
                             ]
                         }
                     ],
                     yAxis : [
                         {
                             type : 'value',
                             axisLabel : {
                                     textStyle: {
                                         color: '#fff'
                                     }
                                 }
                         }
                     ],
                     series : [
                         {
                             name:'C10',
                             type:'line',
                             areaStyle: {},
                             data:self.charData.targetRatioMap.C10.map(function(item){return parseInt(item)}),
                             itemStyle:{color:'#0B8CFF'}
                         },
                         {
                             name:'C13',
                             type:'line',
                             areaStyle: {},
                             data:self.charData.targetRatioMap.C13.map(function(item){return parseInt(item)}),
                             itemStyle:{color:'#04D7F9'}
                         },
                         {
                             name:'CSS45T3',
                             type:'line',
                             areaStyle: {},
                             data:self.charData.targetRatioMap.CSS45T3.map(function(item){return parseInt(item)}),
                             itemStyle:{color:'#5B37CD'}
                         },


                     ]
             });
             centerChart2.setOption({
                     tooltip : {
                         trigger: 'axis',
                         axisPointer: {
                             type: 'cross',
                             label: {
                                 backgroundColor: '#6a7985'
                             }
                         }
                     },
                     legend: {
                         data:['C10','C13','CSS45T3'],
                         textStyle:{color:'white',fontSize:'10'}
                     },
                     grid: {
                        top: '17%',
                         left: '3%',
                         right: '4%',
                         bottom: '3%',
                         containLabel: true
                     },
                     xAxis : [
                         {
                             type : 'category',
                             boundaryGap : false,
                             data :[
                               {value:self.charData.yieldMap.date[0],textStyle:{color:'white'}},
                               {value:self.charData.yieldMap.date[1],textStyle:{color:'white'}},
                               {value:self.charData.yieldMap.date[2],textStyle:{color:'white'}},
                               {value:self.charData.yieldMap.date[3],textStyle:{color:'white'}},
                               {value:self.charData.yieldMap.date[4],textStyle:{color:'white'}},
                               {value:self.charData.yieldMap.date[5],textStyle:{color:'white'}},
                               {value:self.charData.yieldMap.date[6],textStyle:{color:'white'}},
                             ]
                         }
                     ],
                     yAxis : [
                         {
                             type : 'value',
                             axisLabel : {
                                     textStyle: {
                                         color: '#fff'
                                     }
                                 }
                         }
                     ],
                     series : [
                         {
                             name:'C10',
                             type:'line',
                             areaStyle: {},
                             data:self.charData.yieldMap.C10.map(function(item){return parseInt(item)}),
                             itemStyle:{color:'#0B8CFF'}
                         },
                         {
                             name:'C13',
                             type:'line',
                             areaStyle: {},
                             data:self.charData.yieldMap.C13.map(function(item){return parseInt(item)}),
                             itemStyle:{color:'#04D7F9'}
                         },
                         {
                             name:'CSS45T3',
                             type:'line',
                             areaStyle: {},
                             data:self.charData.yieldMap.CSS45T3.map(function(item){return parseInt(item)}),
                             itemStyle:{color:'#5B37CD'}
                         },


                     ]
             });
          }
  }

}
</script>

<style scoped>
    .inlineBlock{display: inline-block;width: 0.57rem;text-align: center;}
    .header{width: 100%;height: 0.81rem;background: url(../assets/img/headbg.png);background-size:100% 100%;position: relative;margin-bottom: 0.2rem;}
    .line1{position: absolute;top: 0.26rem;left: 3rem;width: 2rem;}
    .line2{position: absolute;top: 0.51rem;left: 8.7rem;;width: 2rem;}
    .line3{position: absolute;top: 0.26rem;left: 14rem;;width: 2rem;}
    .line4{position: absolute;top: 0.26rem;right: -0.2rem;;width: 2rem;}
    .date{font-size: 0.27rem;position: absolute;top: 0.09rem;left: 0.4rem;background: linear-gradient(to right, #22EC95, #03C2FA);-webkit-background-clip: text;color: transparent;
    }
    .title{background: linear-gradient(to right, #22EC95, #03C2FA);-webkit-background-clip: text;color: transparent;font-size: 0.35rem;position: absolute;top: 0.2rem;
    left: 9rem;}

    .content{position: relative;padding: 0rem 0.2rem;}
    .centre{width: 6.89rem;height: 6.89rem;position: absolute;left: calc(50% - 3.44rem);top: 0rem;background: url(../assets/img/centerbg.png);background-size:120% 120%;background-position: -0.7rem -0.5rem;}
    .cardsmall{border: 1px solid #5A9BF5;width: 6.14rem;height: 1.76rem;margin-bottom: 0.2rem;}
    .cardcenter{border: 1px solid #5A9BF5;width: 5.96rem;height: 2.75rem;margin-bottom: 0.2rem;}
    .cardbig{border: 1px solid #5A9BF5;width: 9.15rem;height: 3.64rem;margin-bottom: 0.2rem;float: left;}
    .chartCard{position: relative;}
    .chartCard img.rightbottom{position: absolute;left: -0.04rem;top: -0.04rem;width: 0.5rem;}
    .chartCard img.leftTop{position: absolute;right: -0.04rem;top: -0.04rem;width: 0.5rem;}
    .chartCard img.leftBottom{position: absolute;left: -0.04rem;bottom: -0.04rem;width: 0.5rem;}
    .chartCard img.rightTop{position: absolute;right: -0.04rem;bottom: -0.04rem;width: 0.5rem;}
    .headerText{width:2.75rem;height: 0.37rem;background: url(../assets/img/headerText.png);background-size:100% 100%;position: absolute;top: 0.57rem;left: 0.2rem;
    text-align: center;font-size: 0.18rem;line-height: 0.4rem;}
    .cenTitle{text-align: center;margin: auto;width: 1.95rem;height: 0.37rem;font-size: 0.18rem;background-image:url(../assets/img/headerText.png);background-size: 100% 100%;line-height: 0.38rem;}
    .bigTitle{text-align: center;margin: auto;width: 2.75rem;height: 0.37rem;font-size: 0.18rem;background-image:url(../assets/img/headerText.png);background-size: 100% 100%;line-height: 0.38rem;}

    .textCenter{display: block;width: 1.5rem;text-align: center;}
</style>
