const lineOption = function (xDate, yDate) {
  let obj = {
    xAxis: {
      type: "category",
      data: xDate,
      nameTextStyle: {
        fontStyle: 'normal',
        fontSize: 10,
      },
      nameRotate: 60,
      axisLine: {
      lineStyle: {
        color: 'white'
      }
    },
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
        itemStyle:{color:'#62ABFF'}
      }
    ]
  }
  return obj
}
export default lineOption