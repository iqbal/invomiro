"use strict";

var data2 = [{
  OrderID: 10248,
  CustomerID: 'VINET',
  Freight: 32.38,
  OrderDate: new Date(8364186e5)
}, {
  OrderID: 10249,
  CustomerID: 'AAAAA',
  Freight: 11.61,
  OrderDate: new Date(836505e6)
}, {
  OrderID: 10250,
  CustomerID: 'AAAAA',
  Freight: 65.83,
  OrderDate: new Date(8367642e5)
}, {
  OrderID: 10251,
  CustomerID: 'AAAAA',
  Freight: 41.34,
  OrderDate: new Date(8368506e5)
}, {
  OrderID: 10252,
  CustomerID: 'SUPRD',
  Freight: 51.3,
  OrderDate: new Date(8367642e5)
}, {
  OrderID: 10253,
  CustomerID: 'HANAR',
  Freight: 58.17,
  OrderDate: new Date(836937e6)
}, {
  OrderID: 10254,
  CustomerID: 'CHOPS',
  Freight: 22.98,
  OrderDate: new Date(8370234e5)
}, {
  OrderID: 10255,
  CustomerID: 'RICSU',
  Freight: 148.33,
  OrderDate: new Date(8371098e5)
}, {
  OrderID: 10256,
  CustomerID: 'WELLI',
  Freight: 13.97,
  OrderDate: new Date(837369e6)
}];

function renderModuleCatalogDict() {
  var grid2 = new ej.grids.Grid({
    dataSource: data2,
    columns: [{
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
      type: 'number'
    }, {
      field: 'CustomerID',
      width: 140,
      headerText: 'Customer ID',
      type: 'string'
    }, {
      field: 'Freight',
      headerText: 'Freight',
      textAlign: 'Right',
      width: 120,
      format: 'C'
    }, {
      field: 'OrderDate',
      headerText: 'Order Date',
      width: 140,
      format: 'yMd'
    }],
    allowFiltering: true,
    allowSorting: true
  });
  grid2.appendTo('#module-catalog-dict');
}