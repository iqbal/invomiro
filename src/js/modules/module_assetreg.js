var module_assetreg_treegrid = new ej.treegrid.TreeGrid({
  // datasource: $.ajax({
  //   type: "GET",
  //   url: "https://invomiro.astoge.com:8008/asset_mgt/getTreeAsset/",
  //   contentType: "application/json",
  //   success: function (response) {
  //     console.log("response", response);
  //     module_assetreg_treegrid.dataSource = response;
  //   },
  // }),
  dataSource: new ej.data.DataManager({
    headers: [
      { "Access-Control-Allow-Origin": "*" },
      { "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT" },
      { "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization" }
    ],
    type: 'GET',
    url: 'https://invomiro.astoge.com:8008/asset_mgt/getTreeAsset/',
    crossDomain: true
  }).executeQuery(new ej.data.Query()).then(function (e) {
    module_assetreg_treegrid.dataSource = e.result;
  }),
  childMapping: "Child_asset",
  height: 350,
  allowResizing: true,
  allowFiltering: true,
  filterSettings: { type: 'Excel' },
  allowSorting: true,
  sortSettings: { columns: [{ field: 'ID_asset', direction: 'Ascending' }] },
  treeColumnIndex: 0,
  columns: [
    {
      field: "ID_asset",
      headerText: "Asset ID",
      width: 90,
      textAlign: "Left",
    },
    {
      field: "Asset_name",
      headerText: "Asset Name",
      width: 180,
      textAlign: "Left",
    },
    {
      field: "Asset_level",
      headerText: "Level",
      width: 50,
      textAlign: "Left",
    },
    {
      field: "ID_parent",
      headerText: "parrent",
      width: 50,
      textAlign: "Left",
    },
  ],
  rowSelected: treeAssetSelect
});

module_assetreg_treegrid.appendTo("#module-assetreg-treegrid");

function treeAssetSelect(args) {
  var selRecord = args.data;
  console.log(selRecord);
  module_assetreg_detail_id_asset.value = selRecord.ID_asset;
  module_assetreg_detail_asset_name.value = selRecord.Asset_name;
  
}


var module_assetreg_detail_id_asset = new ej.inputs.TextBox({
  placeholder: 'ID Asset',
  cssClass: 'e-outline',
  floatLabelType: 'Always'
});
module_assetreg_detail_id_asset.appendTo('#module-assetreg-detail-id_asset');

var module_assetreg_detail_asset_name = new ej.inputs.TextBox({
  placeholder: 'Asset Name',
  cssClass: 'e-outline',
  floatLabelType: 'Always'
});
module_assetreg_detail_asset_name.appendTo('#module-assetreg-detail-asset_name');

var module_assetreg_detail_func_loc = new ej.inputs.TextBox({
  placeholder: 'ID Func. Loc.',
  cssClass: 'e-outline',
  floatLabelType: 'Always'
});
module_assetreg_detail_func_loc.appendTo('#module-assetreg-detail-func_loc');

var module_assetreg_detail_func_loc_name = new ej.inputs.TextBox({
  placeholder: 'Functional Location',
  cssClass: 'e-outline',
  floatLabelType: 'Always'
});
module_assetreg_detail_func_loc_name.appendTo('#module-assetreg-detail-func_loc_name');

var module_assetreg_detail_asset_desc = new ej.inputs.TextBox({
  placeholder: 'Asset Description',
  cssClass: 'e-outline',
  floatLabelType: 'Always',
  rows: 5
});
module_assetreg_detail_asset_desc.appendTo('#module-assetreg-detail-asset_desc');


var module_assetreg_detail_img_tab = new ej.navigations.Tab();

module_assetreg_detail_img_tab.appendTo('#module-assetreg-detail-asset_img_tab');


var module_assetreg_grid_sub_asset = new ej.grids.Grid({
  dataSource: new ej.data.DataManager({
    headers: [
      { "Access-Control-Allow-Origin": "*" },
      { "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT" },
      { "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization" }
    ],
    type: 'GET',
    url: 'https://invomiro.astoge.com:8008/asset_mgt/getSubAsset/',
    crossDomain: true
  }).executeQuery(new ej.data.Query()).then(function (e) {
    module_assetreg_grid_sub_asset.dataSource = e.result;
  }),
  allowResizing: true,
  height: 650,
  columns: [
    { field: 'id_asset', headerText: 'ID Asset', width: 75 },
    { field: 'asset_name', headerText: 'Asset Name' },
  ]
});
module_assetreg_grid_sub_asset.appendTo('#module-assetreg-detail-sub_asset_list');