const hengBarOption = function (xDate, yDate, lineColor) {
  let obj = {
    color: ['#0ED420', '#F9C501', '#0077FF'],
    legend: {
      data: ['已完工', '进行中', '未开始'],
      textStyle: {
        color: 'white',
      },
      x: 'right',      //可设定图例在左、右、居中
      y: '10',     //可设定图例在上、下、居中
      padding: [0, 50, 0, 0],
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      max: 15,
      splitNumber: 16,
      splitLine: {
        show: true,
        lineStyle:{
            color: ['slategrey'],
            width: 0,
            type: 'solid',
            show: false,
        }
      },
      axisLine: {
        lineStyle: {
          show: 'false',
          color: 'slategrey'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          show: false,
        },
        formatter: function () {
          return "";
        }
      }
    },
    yAxis: {
      type: 'category',
      data: yDate,
      axisLabel: {
        textStyle: {
          color: '#fff',
          show: false,
        },
        lineStyle: {
          show: 'false',
        }
      }
    },
    series: xDate
  };
  return obj
}
export default hengBarOption