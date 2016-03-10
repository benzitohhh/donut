var c3 = require('c3');

c3.generate({
  bindto: '#container',
  data: {
    columns: [
      ['data1', 30],
      ['data2', 120],
    ],
    type : 'donut'
  },
  legend: {
    position: 'right'
  },
  donut: {
    title: "Iris Petal Width"
  }
});
