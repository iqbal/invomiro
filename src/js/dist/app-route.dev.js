'use strict';

(function () {
  function init() {
    var router = new Router([new Route('module-dashboard', 'module_dashboard.js', true), new Route('module-catalog', 'module_catalog.js'), new Route('module-catalog-dict', 'module_catalog_dict.js'), new Route('module-groupclass', 'module_groupclass.js'), new Route('module-abbreviations', 'module_abbreviations.js')]);
  }

  init();
})();