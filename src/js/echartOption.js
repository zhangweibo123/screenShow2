const lineOption = function (xDate, yDate, lineColor) {
  let obj = {
    xAxis: {
      type: "category",
      data: xDate,
      nameTextStyle: {
        fontStyle: 'normal',
        fontSize: 10,
      },
      // nameRotate: 60,
      axisLine: {
        lineStyle: {
          color: 'white'
        }
      },
      axisLabel: {
        interval: 0,
        rotate: 40
      }
    },

    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      },

    ],
    series: [
      {
        data: yDate,
        type: "line",
        itemStyle: { color: '#62ABFF' },
        lineStyle: { color: lineColor },
      }
    ]
  }
  return obj
}
export default lineOption