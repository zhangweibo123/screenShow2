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
      top: '20%',
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
    series: [
      {
        data: yDate,
        type: "line",
        symbol:'circle',//拐点设置为实心
        symbolSize:4,//拐点大小
        itemStyle: {
          color: lineColor,
          borderWidth: 0,
          borderColor: 0,
          normal: {
            color: lineColor,
          }
        },
        lineStyle: { color: lineColor },
      }
    ]
  }
  return obj
}
export default lineOption