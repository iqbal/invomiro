var abbrevPanel = new ej.layouts.DashboardLayout({
    cellSpacing: [10, 10],
    columns: 6,
    allowDragging: false,
    panels: [{ "sizeX": 1, "sizeY": 3, "row": 0, "col": 0, header: '<div class="header"> Modul Abbreviation </div>', content: '<div id="dbfield"><div>' },
        { "sizeX": 3, "sizeY": 3, "row": 0, "col": 1, header: '<div class="header"> Product usage ratio </div>', content: '<div id="dbgrid"><div>' },
        { "sizeX": 2, "sizeY": 3, "row": 0, "col": 4, header: '<div class="header"> Panel #3 </div>', content: '<div id="pie"><div>' }
    ]
});

var accChart = new ej.charts.AccumulationChart({
    series: [{
        dataSource: [{ x: 'TypeScript', y: 13, text: 'TS 13%' }, { x: 'React', y: 12.5, text: 'Reat 12.5%' }, { x: 'MVC', y: 12, text: 'MVC 12%' }, { x: 'Core', y: 12.5, text: 'Core 12.5%' }, { x: 'Vue', y: 10, text: 'Vue 10%' }, { x: 'Angular', y: 40, text: 'Angular 40%' }],
        xName: 'x',
        yName: 'y',
        innerRadius: "20%"
    }],
    tooltip: { enable: true },
    height: "162px"
});

var griddb = new ej.grids.Grid({
    dataSource: [{ OrderID: 10248, CustomerID: 'VINET', Freight: 32.38, OrderDate: new Date(8364186e5) },
        { OrderID: 10249, CustomerID: 'YYYYY', Freight: 11.61, OrderDate: new Date(836505e6) },
        { OrderID: 10250, CustomerID: 'ZZZZZ', Freight: 65.83, OrderDate: new Date(8367642e5) },
        { OrderID: 10251, CustomerID: 'DDDDD', Freight: 41.34, OrderDate: new Date(8368506e5) },
        { OrderID: 10252, CustomerID: 'HHHHH', Freight: 51.3, OrderDate: new Date(8367642e5) },
        { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17, OrderDate: new Date(836937e6) },
        { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98, OrderDate: new Date(8370234e5) },
        { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33, OrderDate: new Date(8371098e5) },
        { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97, OrderDate: new Date(837369e6) }
    ],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight (Rp)', textAlign: 'Right', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowSorting: true,
    allowPaging: true,
    pageSettings: { pageSize: 5 }
});

function resizeDB() {
    window.dispatchEvent(new Event('resize'));
    console.log("dashboard resized");
}

function renderModuleAbbreviations() {
    // abbrevPanel.appendTo('#module-abbreviations');
    // accChart.appendTo('#pie');
    // griddb.appendTo("#dbgrid");
}