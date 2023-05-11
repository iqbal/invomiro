"use strict";

// var data1 = new ej.data.DataManager({
//     url: './src/php/gridstdname.php',
//     adaptor: new ej.data.ODataV4Adaptor(),
//     offline: true
// });
// ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Sort, ej.grids.Group);
// var grid1 = new ej.grids.Grid({
//     dataSource: data1,
//     columns: [
//         { field: 'inc', headerText: 'INC', width: 100, type: 'string' },
//         { field: 'standardname', headerText: 'standard name', width: 200, type: 'string' },
//         { field: 'terminology', headerText: 'terminology', width: 400, type: 'string' },
//         { field: 'shortname', headerText: 'short name', width: 140, type: 'string' }
//     ],
//     allowFiltering: true,
//     allowSorting: true,
//     allowPaging: true,
//     pageSettings: { pageSize: 20 }
// });
// initialize dashboardlayout component
var dashboard1 = new ej.layouts.DashboardLayout({
  cellSpacing: [10, 10],
  columns: 6,
  panels: [{
    'id': 'Panel1',
    'sizeX': 3,
    'sizeY': 2,
    'row': 0,
    'col': 0,
    header: '<div class="header"> Product usage ratio </div>',
    content: '<div id="pie"><div>'
  }, {
    'id': 'Panel2',
    'sizeX': 3,
    'sizeY': 2,
    'row': 0,
    'col': 3,
    header: '<div class="header"> Last year Sales Comparison </div>',
    content: '<div id="column"><div>'
  }, {
    'id': 'Panel3',
    'sizeX': 3,
    'sizeY': 2,
    'row': 0,
    'col': 3,
    header: '<div class="header"> Mobile browsers usage </div>',
    content: '<div id="pie1"><div>'
  }, {
    'id': 'Panel4',
    'sizeX': 3,
    'sizeY': 2,
    'row': 1,
    'col': 0,
    header: '<div class="header"> Sales increase percentage </div>',
    content: '<div id="line"><div>'
  }]
}); // render initialized dashboardlayout

dashboard1.appendTo('#module-groupclass');
var chartData = [{
  month: 'Jan',
  sales: 35
}, {
  month: 'Feb',
  sales: 28
}, {
  month: 'Mar',
  sales: 34
}, {
  month: 'Apr',
  sales: 32
}, {
  month: 'May',
  sales: 40
}, {
  month: 'Jun',
  sales: 32
}, {
  month: 'Jul',
  sales: 35
}, {
  month: 'Aug',
  sales: 55
}, {
  month: 'Sep',
  sales: 38
}, {
  month: 'Oct',
  sales: 30
}, {
  month: 'Nov',
  sales: 25
}, {
  month: 'Dec',
  sales: 32
}];
var chart = new ej.charts.Chart({
  primaryXAxis: {
    valueType: 'Category'
  },
  series: [{
    dataSource: chartData,
    xName: 'month',
    yName: 'sales',
    type: 'Column'
  }],
  height: "162px"
}, '#column');
var lineData = [{
  x: 2013,
  y: 28
}, {
  x: 2014,
  y: 25
}, {
  x: 2015,
  y: 26
}, {
  x: 2016,
  y: 27
}, {
  x: 2017,
  y: 32
}, {
  x: 2018,
  y: 35
}];
var linechart = new ej.charts.Chart({
  series: [{
    dataSource: lineData,
    xName: 'x',
    yName: 'y',
    //Series type as line
    type: 'Line'
  }],
  height: "162px"
}, '#line');
var accChart1 = new ej.charts.AccumulationChart({
  series: [{
    dataSource: [{
      x: 'TypeScript',
      y: 13,
      text: 'TS 13%'
    }, {
      x: 'React',
      y: 12.5,
      text: 'Reat 12.5%'
    }, {
      x: 'MVC',
      y: 12,
      text: 'MVC 12%'
    }, {
      x: 'Core',
      y: 12.5,
      text: 'Core 12.5%'
    }, {
      x: 'Vue',
      y: 10,
      text: 'Vue 10%'
    }, {
      x: 'Angular',
      y: 40,
      text: 'Angular 40%'
    }],
    xName: 'x',
    yName: 'y',
    innerRadius: "20%"
  }],
  tooltip: {
    enable: true
  },
  height: "162px"
}, '#pie');
var piechart = new ej.charts.AccumulationChart({
  // Initialize the chart series
  series: [{
    dataSource: [{
      'x': 'Chrome',
      y: 37,
      text: '37%'
    }, {
      'x': 'UC Browser',
      y: 17,
      text: '17%'
    }, {
      'x': 'iPhone',
      y: 19,
      text: '19%'
    }, {
      'x': 'Others',
      y: 4,
      text: '4%'
    }, {
      'x': 'Opera',
      y: 11,
      text: '11%'
    }, {
      'x': 'Android',
      y: 12,
      text: '12%'
    }],
    dataLabel: {
      visible: true,
      position: 'Inside',
      name: 'text',
      font: {
        fontWeight: '600'
      }
    },
    radius: '70%',
    xName: 'x',
    yName: 'y',
    name: 'Browser'
  }],
  center: {
    x: '50%',
    y: '50%'
  },
  enableSmartLabels: true,
  height: "162px",
  enableAnimation: false,
  legendSettings: {
    visible: false
  },
  // Initialize tht tooltip
  tooltip: {
    enable: true,
    format: '${point.x} : <b>${point.y}%</b>'
  }
}, '#pie1');

function renderModuleGroupClass() {
  dashboard1.appendTo('#module-groupclass');
}