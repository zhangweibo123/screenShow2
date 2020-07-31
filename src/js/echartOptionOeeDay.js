const lineOption = function (xDate, yDate, lineColor) {
  let obj = {
    xAxis: {
      type: "category",
      data: xDate,
      nameTextStyle: {
        fontStyle: 'normal',
        fontSize: 6,
      },
      splitLine: {
        show: true,
        lineStyle:{
             color: ['slategrey'],
             width: 1,
            type: 'dashed'
        }
      },
      // nameRotate: 60,
      axisLine: {
        lineStyle: {
          color: 'slategrey',
          ontWeight: 'lighter'
        }
      },
      axisLabel: {
        interval: 0,
        rotate: 40
      }
    },
    grid: {
      top: '22%',
      bottom: '25%'
    },
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle:{
               color: ['slategrey'],
               width: 1,
              type: 'dashed'
          }
      },
        axisLabel: {
          textStyle: {
            color: 'slategrey'
          }
        }
      },

    ],
    // legend: {
    //   data: ['每日达成率', '每日目标'],
    //   textStyle: {
    //     color: 'white',
    //     fontSize: 8,
    //   },
    //   x: 'right',      //可设定图例在左、右、居中
    //   y: '14',     //可设定图例在上、下、居中
    //   padding: [14, 0, 0, 0],
    // },
    series: [
      {
        name: '每日达成率',
        data: yDate,
        type: "line",
        symbol:'circle',//拐点设置为实心
        symbolSize:4,//拐点大小
        itemStyle: {
          color: lineColor,
          borderWidth: 0,
          borderColor: 0,
          normal: {
            color: '#1402FF',
          }
        },
        lineStyle: { color: '#1402FF'},
      },
      {
        name: '每日目标',
        data: [100,100,100,100,100,100,100,100,100,100,100,100,100,100],
        type: "line",
        symbol:'circle',//拐点设置为实心
        symbolSize:4,//拐点大小
        itemStyle: {
          color: lineColor,
          borderWidth: 0,
          borderColor: 0,
          normal: {
            color: '#FFA502',
          }
        },
        lineStyle: { color: '#FFA502' },
      }
    ]
  }
  return obj
}
export default lineOption