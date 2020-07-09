const lineOption = function(xDate, yDate) {
   let obj = {
        xAxis: {
          type: "category",
          axisLabel:{interval:0},
          data: xDate
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: yDate,
            type: "line"
          }
        ]
      }
      console.log(obj)
      return obj
}
export default lineOption