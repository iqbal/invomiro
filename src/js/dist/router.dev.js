'use strict';

function Router(routes) {
  try {
    if (!routes) {
      throw 'error: routes param is mandatory';
    }

    this.constructor(routes);
    this.init();
  } catch (e) {
    console.error(e);
  }
}

Router.prototype = {
  routes: undefined,
  rootElem: undefined,
  constructor: function constructor(routes) {
    this.routes = routes;
    this.rootElem = document.getElementById('mlete-inner-content');
  },
  init: function init() {
    var r = this.routes;

    (function (scope, r) {
      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, r);
      });
    })(this, r);

    this.hasChanged(this, r);
  },
  hasChanged: function hasChanged(scope, r) {
    if (window.location.hash.length > 0) {
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];

        if (route.isActiveRoute(window.location.hash.substr(1))) {
          scope.goToRoute(route.jsName);
        }
      }
    } else {
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];

        if (route["default"]) {
          scope.goToRoute(route.jsName);
        }
      }
    }
  },
  goToRoute: function goToRoute(jsName) {
    (function (scope) {
      console.log(jsName);
      var url = 'src/js/modules/' + jsName,
          xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        var x1 = document.getElementById("module-dashboard");
        var x2 = document.getElementById("module-catalog");
        var x3 = document.getElementById("module-catalog-dict");
        var x4 = document.getElementById("module-groupclass");
        var x5 = document.getElementById("module-abbreviations");

        if (jsName == 'module_dashboard.js') {
          x1.style.display = "block";
          x2.style.display = "none";
          x3.style.display = "none";
          x4.style.display = "none";
          x5.style.display = "none";
        }

        if (jsName == 'module_catalog.js') {
          x1.style.display = "none";
          x2.style.display = "block";
          x3.style.display = "none";
          x4.style.display = "none";
          x5.style.display = "none";
        }

        if (jsName == 'module_catalog_dict.js') {
          x1.style.display = "none";
          x2.style.display = "none";
          x3.style.display = "block";
          x4.style.display = "none";
          x5.style.display = "none";
        }

        if (jsName == 'module_groupclass.js') {
          resizeDB();
          x1.style.display = "none";
          x2.style.display = "none";
          x3.style.display = "none";
          x4.style.display = "block";
          x5.style.display = "none";
        }

        if (jsName == 'module_abbreviations.js') {
          x1.style.display = "none";
          x2.style.display = "none";
          x3.style.display = "none";
          x4.style.display = "none";
          x5.style.display = "block";
        }
      };

      xhttp.open('GET', url, true);
      xhttp.send();
    })(this);
  }
};