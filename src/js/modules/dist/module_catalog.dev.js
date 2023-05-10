"use strict";

// panel material master
var comboBoxObj = new ej.dropdowns.ComboBox({
  popupHeight: '230px',
  index: 2,
  cssClass: 'e-outline',
  placeholder: 'seach by',
  floatLabelType: 'Always'
});
comboBoxObj.appendTo('#module-catalog-search-key1');
var outlineTextBox = new ej.inputs.TextBox({
  placeholder: 'search keyword',
  cssClass: 'e-outline',
  floatLabelType: 'Always'
});
outlineTextBox.appendTo('#module-catalog-search-key2');
var button_search = new ej.buttons.Button();
button_search.appendTo('#module-catalog-search-btn');

button_search.element.onclick = function () {
  console.log(document.getElementById('module-catalog-image-panel').src);
};

var module_catalog_grid_search = new ej.grids.Grid({
  dataSource: new ej.data.DataManager({
    headers: [{
      "Access-Control-Allow-Origin": "*"
    }, {
      "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT"
    }, {
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }],
    type: 'GET',
    url: 'http://localhost:8008/getPartmasters/',
    crossDomain: true
  }).executeQuery(new ej.data.Query()).then(function (e) {
    module_catalog_grid_search.dataSource = e.result;
  }),
  allowPaging: true,
  allowSorting: true,
  allowResizing: true,
  allowFiltering: true,
  showColumnMenu: true,
  columns: [{
    field: 'itemnbr',
    headerText: 'Item Number',
    width: 120
  }, {
    field: 'shortdesc',
    headerText: 'Short Desc',
    width: 150
  }, {
    field: 'longdesc',
    headerText: 'Long Desc',
    width: 130
  }, {
    field: 'source1',
    headerText: 'Raw Data #1',
    width: 120
  }, {
    field: 'source2',
    headerText: 'Raw Data #2',
    width: 120
  }, {
    field: 'refnbr',
    headerText: 'PN/RN',
    width: 150
  }],
  pageSettings: {
    pageCount: 5
  }
});
module_catalog_grid_search.appendTo('#module-catalog-grid-search'); // panel material data specification
// sub panel material item desc

var item_nbr_TextBox = new ej.inputs.TextBox({
  placeholder: 'Item Number',
  cssClass: 'e-outline',
  floatLabelType: 'Always'
});
item_nbr_TextBox.appendTo('#module-catalog-desc-panel-tab-desc-itemnbr');
var item_INC_TextBox = new ej.inputs.TextBox({
  placeholder: 'INC',
  cssClass: 'e-outline',
  floatLabelType: 'Always'
});
item_INC_TextBox.appendTo('#module-catalog-desc-panel-tab-desc-inc');
var item_stdname_TextBox = new ej.inputs.TextBox({
  placeholder: 'Standardname',
  cssClass: 'e-outline',
  floatLabelType: 'Always'
});
item_stdname_TextBox.appendTo('#module-catalog-desc-panel-tab-desc-stdname');
var modul_catalog_panel_desc = new ej.navigations.Tab({
  items: [{
    header: {
      'text': 'Description'
    },
    content: '#module-catalog-desc-panel_tab_desc'
  }, {
    header: {
      'text': 'Raw Data'
    },
    content: '#module-catalog-desc-panel_tab_raw'
  }]
});
modul_catalog_panel_desc.appendTo('#module-catalog-desc-panel'); // sub panel material item status

var msgstat_desc = new ej.notifications.Message({
  content: "description data on-progress"
});
msgstat_desc.appendTo('#mmodule-catalog-status-desc');
var msgstat_char = new ej.notifications.Message({
  content: "characteristic data ok",
  severity: "Info"
});
msgstat_char.appendTo('#mmodule-catalog-status-characteristic');
var msgstat_pn = new ej.notifications.Message({
  content: "partnumber data ok",
  severity: "Warning"
});
msgstat_pn.appendTo('#mmodule-catalog-status-partnumber');
var msgstat_assetreg = new ej.notifications.Message({
  content: "asset register data on-progress",
  severity: "Error"
});
msgstat_assetreg.appendTo('#mmodule-catalog-status-asset-register');
var msgstat_mrp = new ej.notifications.Message({
  content: "MRP data ok",
  severity: "Success"
});
msgstat_mrp.appendTo('#mmodule-catalog-status-mrp');
var msgstat_item = new ej.notifications.Message({
  content: "Material data ok",
  severity: "Success"
});
msgstat_item.appendTo('#mmodule-catalog-status-item'); // sub panel material item image

var button_upload = new ej.buttons.Button();
button_upload.appendTo('#module-catalog-image-upload-btn');

button_upload.element.onclick = function () {
  console.log('button upload image clicked');
};

var button_image1 = new ej.buttons.Button();
button_image1.appendTo('#module-catalog-image-1-btn');

button_image1.element.onclick = function () {
  console.log('button image #1 clicked');
  document.getElementById('module-catalog-image-panel').src = "./assets/images/kucing1.jpg";
};

var button_image1 = new ej.buttons.Button();
button_image1.appendTo('#module-catalog-image-2-btn');

button_image1.element.onclick = function () {
  console.log('button image #2 clicked');
  document.getElementById('module-catalog-image-panel').src = "./assets/images/kucing2.jpg";
};

var button_image1 = new ej.buttons.Button();
button_image1.appendTo('#module-catalog-image-3-btn');

button_image1.element.onclick = function () {
  console.log('button image #3 clicked');
  document.getElementById('module-catalog-image-panel').src = "./assets/images/kucing3.jpg";
}; // sub panel material item characteristic


var module_catalog_grid_characteristic = new ej.grids.Grid({
  dataSource: new ej.data.DataManager({
    headers: [{
      "Access-Control-Allow-Origin": "*"
    }, {
      "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT"
    }, {
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }],
    type: 'GET',
    url: 'http://localhost:8008/getItemCharacteristic/',
    crossDomain: true
  }).executeQuery(new ej.data.Query()).then(function (e) {
    module_catalog_grid_characteristic.dataSource = e.result;
  }),
  allowResizing: true,
  columns: [{
    field: 'characteristic',
    headerText: 'characteristic',
    width: 120
  }, {
    field: 'characteristic_value',
    headerText: 'value',
    width: 150
  }, {
    field: 'characteristic_type',
    headerText: 'type',
    width: 60
  }]
});
module_catalog_grid_characteristic.appendTo('#module-catalog-grid-characteristic'); // sub panel material item partnumber

var module_catalog_grid_pn = new ej.grids.Grid({
  dataSource: new ej.data.DataManager({
    headers: [{
      "Access-Control-Allow-Origin": "*"
    }, {
      "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT"
    }, {
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }],
    type: 'GET',
    url: 'http://localhost:8008/getItemPartNumber/',
    crossDomain: true
  }).executeQuery(new ej.data.Query()).then(function (e) {
    module_catalog_grid_pn.dataSource = e.result;
  }),
  allowResizing: true,
  columns: [{
    field: 'manufacturer',
    headerText: 'manufacturer / vendor',
    width: 150
  }, {
    field: 'partnumber',
    headerText: 'part number',
    width: 100
  }, {
    field: 'priority',
    headerText: 'priority',
    width: 60
  }]
});
module_catalog_grid_pn.appendTo('#module-catalog-grid-pn'); // sub panel material item asset register

var module_catalog_grid_assetreg = new ej.grids.Grid({
  dataSource: new ej.data.DataManager({
    headers: [{
      "Access-Control-Allow-Origin": "*"
    }, {
      "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT"
    }, {
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }],
    type: 'GET',
    url: 'http://localhost:8008/getItemAssetReg/',
    crossDomain: true
  }).executeQuery(new ej.data.Query()).then(function (e) {
    module_catalog_grid_assetreg.dataSource = e.result;
  }),
  allowResizing: true,
  columns: [{
    field: 'parrent_equipment',
    headerText: 'parrent equipment',
    width: 150
  }, {
    field: 'id_asset_parrent',
    headerText: 'id_asset',
    width: 100
  }, {
    field: 'parrent_asset_level',
    headerText: 'level',
    width: 60
  }]
});
module_catalog_grid_assetreg.appendTo('#module-catalog-grid-assetreg'); // sub panel material item mrp data

var module_catalog_grid_mrp = new ej.grids.Grid({
  dataSource: new ej.data.DataManager({
    headers: [{
      "Access-Control-Allow-Origin": "*"
    }, {
      "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT"
    }, {
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }],
    type: 'GET',
    url: 'http://localhost:8008/getItemMRP/',
    crossDomain: true
  }).executeQuery(new ej.data.Query()).then(function (e) {
    module_catalog_grid_mrp.dataSource = e.result;
  }),
  allowResizing: true,
  columns: [{
    field: 'mrp_class',
    headerText: 'MRP classification',
    width: 150
  }, {
    field: 'mrp_value',
    headerText: 'value',
    width: 100
  }, {
    field: 'mrp_type',
    headerText: 'type',
    width: 60
  }]
});
module_catalog_grid_mrp.appendTo('#module-catalog-grid-mrp'); // sub panel material item bin loc

var module_catalog_grid_binloc = new ej.grids.Grid({
  dataSource: new ej.data.DataManager({
    headers: [{
      "Access-Control-Allow-Origin": "*"
    }, {
      "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT"
    }, {
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }],
    type: 'GET',
    url: 'http://localhost:8008/getItemBinLoc/',
    crossDomain: true
  }).executeQuery(new ej.data.Query()).then(function (e) {
    module_catalog_grid_binloc.dataSource = e.result;
  }),
  allowResizing: true,
  columns: [{
    field: 'mrp_class',
    headerText: 'MRP classification',
    width: 150
  }, {
    field: 'mrp_value',
    headerText: 'value',
    width: 100
  }, {
    field: 'mrp_type',
    headerText: 'type',
    width: 60
  }]
});
module_catalog_grid_binloc.appendTo('#module-catalog-grid-binloc');