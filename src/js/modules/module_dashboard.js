var data2 = [{ OrderID: 10248, CustomerID: 'VINET', Freight: 32.38, OrderDate: new Date(8364186e5) },
{ OrderID: 10249, CustomerID: 'YYYYY', Freight: 11.61, OrderDate: new Date(836505e6) },
{ OrderID: 10250, CustomerID: 'ZZZZZ', Freight: 65.83, OrderDate: new Date(8367642e5) },
{ OrderID: 10251, CustomerID: 'DDDDD', Freight: 41.34, OrderDate: new Date(8368506e5) },
{ OrderID: 10252, CustomerID: 'HHHHH', Freight: 51.3, OrderDate: new Date(8367642e5) },
{ OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17, OrderDate: new Date(836937e6) },
{ OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98, OrderDate: new Date(8370234e5) },
{ OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33, OrderDate: new Date(8371098e5) },
{ OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97, OrderDate: new Date(837369e6) }];

var grid2 = new ej.grids.Grid({
    dataSource: data2,
    height: 275,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight (Rp)', textAlign: 'Right', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowSorting: true,
    allowPaging: true,
    rowSelected: rowSelected1,
    pageSettings: { pageSize: 5 }
});

function rowSelected1(args) {
    var selRecord = args.data;
    console.log(selRecord);
    document.getElementById("db2").value = selRecord.CustomerID;
    document.getElementById("db3").value = selRecord.Freight;
}

var inputobj1 = new ej.inputs.TextBox({
    placeholder: 'Customer ID',
    cssClass: 'e-outline',
    width: 200,
    floatLabelType: 'Always'
});

var inputobj2 = new ej.inputs.NumericTextBox({
    placeholder: 'Freight (Rp)',
    cssClass: 'e-outline',
    width: 200,
    floatLabelType: 'Always'
});

var dropDownList = new ej.dropdowns.DropDownList({
    placeholder: 'ID Customer',
    cssClass: 'e-outline',
    width: 200,
    floatLabelType: 'Always'
});

function renderModuleDashboard() {
    grid2.appendTo('#db1');
    inputobj1.appendTo('#db2');
    inputobj2.appendTo('#db3');
    dropDownList.appendTo('#db4');
}