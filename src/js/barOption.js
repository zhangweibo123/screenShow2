const lineOption = function (xDate, yDate, lineColor) {
  let obj = {
    color: ['#62ABFF'],
    grid: {
      top: '5%',
      bottom:'25%'
    },
    xAxis: {
      type: 'category',
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
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} %',
        textStyle: {
          color: '#fff'
        }
      }
    },
    series: [{
      data: yDate,
      type: 'bar',
      backgroundStyle: {
        color: 'blue'
      }
    }]
  };
  return obj
}
export default lineOption