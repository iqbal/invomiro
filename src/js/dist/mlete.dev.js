"use strict";

$.fn.mletemenu = function (danari) {
  var armande = this.attr("id");
  var dantasia = {
    themelayout: "vertical",
    MenuTrigger: "click",
    SubMenuTrigger: "click",
    activeMenuClass: "active",
    ThemeBackgroundPattern: "pattern6",
    HeaderBackground: "theme2",
    LHeaderBackground: "theme4",
    NavbarBackground: "theme4",
    ActiveItemBackground: "theme0",
    SubItemBackground: "theme2",
    ActiveItemStyle: "style0",
    ItemBorder: true,
    ItemBorderStyle: "solid",
    SubItemBorder: true,
    DropDownIconStyle: "style1",
    FixedNavbarPosition: false,
    FixedHeaderPosition: false,
    horizontalMenuplacement: "top",
    horizontalMenulayout: "widebox",
    horizontalBrandItem: true,
    horizontalLeftNavItem: true,
    horizontalRightItem: false,
    horizontalSearchItem: false,
    horizontalBrandItemAlign: "left",
    horizontalLeftNavItemAlign: "right",
    horizontalRightItemAlign: "right",
    horizontalsearchItemAlign: "right",
    horizontalstickynavigation: false,
    horizontalNavigationView: "view1",
    horizontalNavIsCentered: false,
    horizontalNavigationMenuIcon: true,
    verticalMenuplacement: "left",
    verticalMenulayout: "wide",
    collapseVerticalLeftHeader: true,
    VerticalSubMenuItemIconStyle: "style6",
    VerticalNavigationView: "view1",
    verticalMenueffect: {
      desktop: "shrink",
      tablet: "push",
      phone: "overlay"
    },
    defaultVerticalMenu: {
      desktop: "expanded",
      tablet: "collapsed",
      phone: "offcanvas"
    },
    onToggleVerticalMenu: {
      desktop: "collapsed",
      tablet: "expanded",
      phone: "expanded"
    }
  };
  var danari = $.extend({}, dantasia, danari);
  var yousif = {
    mleteMenuInit: function mleteMenuInit() {
      yousif.Handlethemelayout();
      yousif.HandleverticalMenuplacement();
      yousif.HandlehorizontalMenuplacement();
      yousif.HandleMenulayout();
      yousif.HandleDeviceType();
      yousif.Handlecomponetheight();
      yousif.HandleMenuOnClick();
      yousif.HandleMenuTrigger();
      yousif.HandleSubMenuTrigger();
      yousif.HandleActiveItem();
      yousif.HandleOffcanvasMenu();
      yousif.HandleVerticalLeftHeader();
      yousif.HandleThemeBackground();
      yousif.HandleActiveItemStyle();
      yousif.HandleItemBorder();
      yousif.HandleBorderStyle();
      yousif.HandleSubItemBorder();
      yousif.HandleDropDownIconStyle();
      yousif.HandleOptionSelectorPanel();
      yousif.HandleNavbarPosition();
      yousif.HandleVerticalSubMenuItemIconStyle();
      yousif.HandleVerticalNavigationView();
      yousif.HandleHorizontalItemIsCentered();
      yousif.HandleHorizontalItemAlignment();
      yousif.HandleSubMenuOffset();
      yousif.HandleHorizontalStickyNavigation();
      yousif.HandleDocumentClickEvent();
      yousif.HandleVerticalScrollbar();
      yousif.HandleHorizontalMobileMenuToggle();
      yousif.horizontalNavigationMenuIcon();
      yousif.verticalNavigationSearchBar();
      yousif.safariBrowsercompatibility();
    },
    safariBrowsercompatibility: function safariBrowsercompatibility() {
      is_chrome = navigator.userAgent.indexOf("Chrome") > -1;
      is_explorer = navigator.userAgent.indexOf("MSIE") > -1;
      is_firefox = navigator.userAgent.indexOf("Firefox") > -1;
      is_safari = navigator.userAgent.indexOf("Safari") > -1;
      is_opera = navigator.userAgent.indexOf("Presto") > -1;
      is_mac = navigator.userAgent.indexOf("Mac OS") != -1;
      is_windows = !is_mac;

      if (is_chrome && is_safari) {
        is_safari = false;
      }

      ;

      if (is_safari || is_windows) {
        $("body").css("-webkit-text-stroke", "0.05px");
        $("body").css("-webkit-font-smoothing", "antialiased");
      }
    },
    verticalNavigationSearchBar: function verticalNavigationSearchBar() {
      if (danari.themelayout === "vertical") {
        $(".searchbar-toggle").on("click", function () {
          $(this).parent(".mlete-search").toggleClass("open");
        });
      }
    },
    horizontalNavigationMenuIcon: function horizontalNavigationMenuIcon() {
      if (danari.themelayout === "horizontal") {
        switch (danari.horizontalNavigationMenuIcon) {
          case false:
            $("#" + armande + ".mlete .mlete-navbar .mlete-item > li > a .mlete-micon").hide();
            $("#" + armande + ".mlete .mlete-navbar .mlete-item.mlete-search-item > li > a .mlete-micon").show();
            break;

          default:
        }
      }
    },
    HandleHorizontalMobileMenuToggle: function HandleHorizontalMobileMenuToggle() {
      if (danari.themelayout === "horizontal") {
        $(".mletebrand-xs .menu-toggle a").on("click", function () {
          $(".mlete-navbar").toggleClass("show-menu");
        });
      }
    },
    HandleVerticalScrollbar: function HandleVerticalScrollbar() {
      if (danari.themelayout === "vertical") {
        satnt = danari.defaultVerticalMenu.desktop;

        if (satnt === "expanded" || satnt === "compact") {
          mt = danari.MenuTrigger;

          if (mt === "click") {
            $(window).on("load", function () {
              $(".mlete-navbar").mCustomScrollbar({
                axis: "y",
                autoHideScrollbar: false,
                scrollInertia: 100,
                theme: "minimal"
              });
              $(".sidebar_toggle a").click(function (charvi) {
                charvi.preventDefault();
                var tayln = $(this);
                rel = tayln.attr("rel");
                el = $(".mlete-navbar");

                if (el.hasClass("mCS_destroyed")) {
                  el.mCustomScrollbar({
                    axis: "y",
                    autoHideScrollbar: false,
                    scrollInertia: 100,
                    theme: "minimal"
                  });
                } else {
                  el.mCustomScrollbar("destroy");
                }
              });
            });
          }
        }
      }
    },
    HandleDocumentClickEvent: function HandleDocumentClickEvent() {
      function lamea() {
        $(document).on("click", function (yeilani) {
          var lytle = $(yeilani.target);
          var geri = $("#" + armande).attr("mlete-device-type");
          var milanni = $("#" + armande).attr("vertical-nav-type");
          var allisen = $("#" + armande + " .mlete-item li");

          if (!lytle.parents(".mlete-item").length) {
            if (geri != "phone") {
              if (milanni != "expanded") {
                allisen.removeClass("mlete-trigger");
              }
            }
          }
        });
      }

      function geradine() {
        $(document).on("click", function (jamez) {
          var arieonna = $(jamez.target);
          var maryetta = $("#" + armande + " .mlete-search");

          if (!arieonna.parents(".mlete-search").length) {
            maryetta.removeClass("open");
          }
        });
      }

      lamea();
      geradine();
    },
    HandleHorizontalStickyNavigation: function HandleHorizontalStickyNavigation() {
      switch (danari.horizontalstickynavigation) {
        case true:
          $(window).on("scroll", function () {
            var berdina = $(this).scrollTop();

            if (berdina >= 100) {
              $(".mlete-navbar").addClass("stickybar");
              $("stickybar").fadeIn(3e3);
            } else {
              if (berdina <= 100) {
                $(".mlete-navbar").removeClass("stickybar");
                $(".stickybar").fadeOut(3e3);
              }
            }
          });
          break;

        case false:
          $(".mlete-navbar").removeClass("stickybar");
          break;

        default:
      }
    },
    HandleSubMenuOffset: function HandleSubMenuOffset() {
      switch (danari.themelayout) {
        case "horizontal":
          var christoffer = danari.SubMenuTrigger;

          if (christoffer === "hover") {
            $("li.mlete-hasmenu").on("mouseenter mouseleave", function (zaydenn) {
              if ($(".mlete-submenu", this).length) {
                var renne = $(".mlete-submenu:first", this);
                var praxton = renne.offset();
                var firdavs = praxton.left;
                var sheneque = renne.width();
                var leandria = $(window).height();
                var kloee = $(window).width();
                var bethena = firdavs + sheneque <= kloee;

                if (!bethena) {
                  $(this).addClass("edge");
                } else {
                  $(this).removeClass("edge");
                }
              }
            });
          } else {
            $("li.mlete-hasmenu").on("click", function (tateyana) {
              tateyana.preventDefault();

              if ($(".mlete-submenu", this).length) {
                var moy = $(".mlete-submenu:first", this);
                var thalamus = moy.offset();
                var aayla = thalamus.left;
                var metthew = moy.width();
                var cliston = $(window).height();
                var keziyah = $(window).width();
                var lanyra = aayla + metthew <= keziyah;

                if (!lanyra) {
                  $(this).toggleClass("edge");
                }
              }
            });
          }

          ;
          break;

        default:
      }
    },
    HandleHorizontalItemIsCentered: function HandleHorizontalItemIsCentered() {
      if (danari.themelayout === "horizontal") {
        switch (danari.horizontalNavIsCentered) {
          case true:
            $("#" + armande + " .mlete-navbar").addClass("isCentered");
            break;

          case false:
            $("#" + armande + " .mlete-navbar").removeClass("isCentered");
            break;

          default:
        }
      }
    },
    HandleHorizontalItemAlignment: function HandleHorizontalItemAlignment() {
      var keilee = danari.themelayout;

      if (keilee === "horizontal") {
        var thomaslee = function thomaslee() {
          var jamyleth = $("#" + armande + ".mlete .mlete-navbar .mlete-brand");

          if (danari.horizontalBrandItem === true) {
            switch (danari.horizontalBrandItemAlign) {
              case "left":
                jamyleth.removeClass("mlete-right-align");
                jamyleth.addClass("mlete-left-align");
                break;

              case "right":
                jamyleth.removeClass("mlete-left-align");
                jamyleth.addClass("mlete-right-align");
                break;

              default:
            }
          } else {
            jamyleth.hide();
          }
        };

        var bricen = function bricen() {
          var pearlina = $("#" + armande + ".mlete .mlete-navbar .mlete-item.mlete-left-item");

          if (danari.horizontalLeftNavItem === true) {
            switch (danari.horizontalLeftNavItemAlign) {
              case "left":
                pearlina.removeClass("mlete-right-align");
                pearlina.addClass("mlete-left-align");
                break;

              case "right":
                pearlina.removeClass("mlete-left-align");
                pearlina.addClass("mlete-right-align");
                break;

              default:
            }
          } else {
            pearlina.hide();
          }
        };

        var jackeline = function jackeline() {
          var timnesha = $("#" + armande + ".mlete .mlete-navbar .mlete-item.mlete-right-item");

          if (danari.horizontalRightItem === true) {
            switch (danari.horizontalRightItemAlign) {
              case "left":
                timnesha.removeClass("mlete-right-align");
                timnesha.addClass("mlete-left-align");
                break;

              case "right":
                timnesha.removeClass("mlete-left-align");
                timnesha.addClass("mlete-right-align");
                break;

              default:
            }
          } else {
            timnesha.hide();
          }
        };

        var cornisha = function cornisha() {
          var zeilah = $("#" + armande + ".mlete .mlete-navbar .mlete-search-item");

          if (danari.horizontalSearchItem === true) {
            switch (danari.horizontalsearchItemAlign) {
              case "left":
                zeilah.removeClass("mlete-right-align");
                zeilah.addClass("mlete-left-align");
                break;

              case "right":
                zeilah.removeClass("mlete-left-align");
                zeilah.addClass("mlete-right-align");
                break;

              default:
            }
          } else {
            zeilah.hide();
          }
        };

        if (danari.horizontalNavIsCentered === false) {
          thomaslee();
          bricen();
          jackeline();
          cornisha();
        }
      }
    },
    HandleVerticalNavigationView: function HandleVerticalNavigationView() {
      switch (danari.themelayout) {
        case "vertical":
          var kager = danari.VerticalNavigationView;
          $("#" + armande + ".mlete").attr("vnavigation-view", kager);
          break;

        case "horizontal":
          var kager = danari.horizontalNavigationView;
          $("#" + armande + ".mlete").attr("hnavigation-view", kager);
          break;

        default:
      }
    },
    HandleVerticalSubMenuItemIconStyle: function HandleVerticalSubMenuItemIconStyle() {
      switch (danari.themelayout) {
        case "vertical":
          var tanzy = danari.VerticalSubMenuItemIconStyle;
          $("#" + armande + " .mlete-navbar .mlete-hasmenu").attr("subitem-icon", tanzy);
          break;

        case "horizontal":
          $("#" + armande + " .mlete-navbar .mlete-hasmenu").attr("subitem-icon", tanzy);
          break;

        default:
      }
    },
    HandleNavbarPosition: function HandleNavbarPosition() {
      var novae = danari.FixedNavbarPosition;
      var madgel = danari.FixedHeaderPosition;
      var whitney = danari.FixedRightHeaderPosition;

      switch (danari.themelayout) {
        case "vertical":
          if (novae == true) {
            $("#" + armande + " .mlete-navbar").attr("mlete-navbar-position", "fixed");
            $("#" + armande + " .mlete-header .mlete-left-header").attr("mlete-lheader-position", "fixed");
          } else {
            $("#" + armande + " .mlete-navbar").attr("mlete-navbar-position", "absolute");
            $("#" + armande + " .mlete-header .mlete-left-header").attr("mlete-lheader-position", "absolute");
          }

          ;

          if (madgel == true) {
            $("#" + armande + " .mlete-header").attr("mlete-header-position", "fixed");
            $("#" + armande + " .mlete-main-container").css("margin-top", $(".mlete-header").outerHeight());
          } else {
            $("#" + armande + " .mlete-header").attr("mlete-header-position", "relative");
            $("#" + armande + " .mlete-main-container").css("margin-top", "0px");
          }

          ;
          break;

        case "horizontal":
          if (novae == true) {
            $("#" + armande + " .mlete-navbar").attr("mlete-navbar-position", "fixed");
            $("#" + armande + " .mlete-header").attr("mlete-header-position", "fixed");
            $("#" + armande + " .mlete-navbar").css("margin-top", $(".mlete-header").outerHeight());
          } else {
            $("#" + armande + " .mlete-navbar").attr("mlete-navbar-position", " ");
            $("#" + armande + " .mlete-header").attr("mlete-header-position", "relative");
            $("#" + armande + " .mlete-navbar").css("margin-top", "0px");
          }

          ;
          break;

        default:
      }
    },
    HandleOptionSelectorPanel: function HandleOptionSelectorPanel() {
      $(".selector-toggle > a").on("click", function () {
        $("#styleSelector").toggleClass("open");
      });
    },
    HandleDropDownIconStyle: function HandleDropDownIconStyle() {
      var nasteha = danari.DropDownIconStyle;

      switch (danari.themelayout) {
        case "vertical":
          $("#" + armande + " .mlete-navbar .mlete-hasmenu").attr("dropdown-icon", nasteha);
          break;

        case "horizontal":
          $("#" + armande + " .mlete-navbar .mlete-hasmenu").attr("dropdown-icon", nasteha);
          break;

        default:
      }
    },
    HandleSubItemBorder: function HandleSubItemBorder() {
      switch (danari.SubItemBorder) {
        case true:
          $("#" + armande + " .mlete-navbar .mlete-item").attr("subitem-border", "true");
          break;

        case false:
          $("#" + armande + " .mlete-navbar .mlete-item").attr("subitem-border", "false");
          break;

        default:
      }
    },
    HandleBorderStyle: function HandleBorderStyle() {
      var tahjee = danari.ItemBorderStyle;

      switch (danari.ItemBorder) {
        case true:
          $("#" + armande + " .mlete-navbar .mlete-item").attr("item-border-style", tahjee);
          break;

        case false:
          $("#" + armande + " .mlete-navbar .mlete-item").attr("item-border-style", "");
          break;

        default:
      }
    },
    HandleItemBorder: function HandleItemBorder() {
      switch (danari.ItemBorder) {
        case true:
          $("#" + armande + " .mlete-navbar .mlete-item").attr("item-border", "true");
          break;

        case false:
          $("#" + armande + " .mlete-navbar .mlete-item").attr("item-border", "false");
          break;

        default:
      }
    },
    HandleActiveItemStyle: function HandleActiveItemStyle() {
      var marge = danari.ActiveItemStyle;

      if (marge != undefined && marge != "") {
        $("#" + armande + " .mlete-navbar").attr("active-item-style", marge);
      } else {
        $("#" + armande + " .mlete-navbar").attr("active-item-style", "style0");
      }
    },
    HandleThemeBackground: function HandleThemeBackground() {
      function sharmain() {
        var keonie = danari.ThemeBackgroundPattern;

        if (keonie != undefined && keonie != "") {
          $("body").attr("themebg-pattern", keonie);
        } else {
          $("body").attr("themebg-pattern", "pattern1");
        }
      }

      function jeraldene() {
        var macarthur = danari.HeaderBackground;

        if (macarthur != undefined && macarthur != "") {
          $("#" + armande + " .mlete-header").attr("header-theme", macarthur);
        } else {
          $("#" + armande + " .mlete-header").attr("header-theme", "theme1");
        }
      }

      function paisly() {
        var kivon = danari.LHeaderBackground;

        if (kivon != undefined && kivon != "") {
          $("#" + armande + " .mlete-header .mlete-left-header").attr("lheader-theme", kivon);
        } else {
          $("#" + armande + " .mlete-header .mlete-left-header").attr("lheader-theme", "theme1");
        }
      }

      function havoc() {
        var dymple = danari.NavbarBackground;

        if (dymple != undefined && dymple != "") {
          $("#" + armande + " .mlete-navbar").attr("navbar-theme", dymple);
        } else {
          $("#" + armande + " .mlete-navbar").attr("navbar-theme", "theme1");
        }
      }

      function brisny() {
        var kalesha = danari.ActiveItemBackground;

        if (kalesha != undefined && kalesha != "") {
          $("#" + armande + " .mlete-navbar").attr("active-item-theme", kalesha);
        } else {
          $("#" + armande + " .mlete-navbar").attr("active-item-theme", "theme1");
        }
      }

      function akerria() {
        var bonita = danari.SubItemBackground;

        if (bonita != undefined && bonita != "") {
          $("#" + armande + " .mlete-navbar").attr("sub-item-theme", bonita);
        } else {
          $("#" + armande + " .mlete-navbar").attr("sub-item-theme", "theme1");
        }
      }

      sharmain();
      jeraldene();
      paisly();
      havoc();
      brisny();
      akerria();
    },
    HandleVerticalLeftHeader: function HandleVerticalLeftHeader() {
      if (danari.themelayout === "vertical") {
        switch (danari.collapseVerticalLeftHeader) {
          case true:
            $("#" + armande + " .mlete-header").addClass("iscollapsed");
            $("#" + armande + " .mlete-header").removeClass("nocollapsed");
            $("#" + armande + ".mlete").addClass("iscollapsed");
            $("#" + armande + ".mlete").removeClass("nocollapsed");
            break;

          case false:
            $("#" + armande + " .mlete-header").removeClass("iscollapsed");
            $("#" + armande + " .mlete-header").addClass("nocollapsed");
            $("#" + armande + ".mlete").removeClass("iscollapsed");
            $("#" + armande + ".mlete").addClass("nocollapsed");
            break;

          default:
        }
      } else {
        return false;
      }
    },
    HandleOffcanvasMenu: function HandleOffcanvasMenu() {
      if (danari.themelayout === "vertical") {
        var louvena = $("#" + armande).attr("vertical-nav-type");

        if (louvena == "offcanvas") {
          $("#" + armande).attr("vertical-layout", "wide");
        }
      }
    },
    HandleActiveItem: function HandleActiveItem() {
      switch (danari.activeMenuClass) {
        case "active":
          $('li:not("li.mlete-hasmenu")').on("click", function () {
            var jaslene = $(this).closest(".mlete-submenu").length;

            if (jaslene === 0) {
              $(this).closest(".mlete-inner-navbar").find("li.active").removeClass("active");
              $(this).addClass("active");
            } else {
              if ($(this).hasClass("active")) {
                $(this).removeClass("active");
              } else {
                $(this).closest(".mlete-inner-navbar").find("li.active").removeClass("active");
                $(this).parents(".mlete-hasmenu").addClass("active");
                $(this).addClass("active");
              }
            }
          });
          break;

        case false:
          $(".mlete-header").removeClass(danari.navbbgclass);
          break;

        default:
      }
    },
    HandleSubMenuTrigger: function HandleSubMenuTrigger() {
      switch (danari.SubMenuTrigger) {
        case "hover":
          $("#" + armande + " .mlete-navbar .mlete-hasmenu").addClass("is-hover");
          var grazia = $(window);
          var yonas = $(".mlete-submenu > li");
          var glyndora = grazia.width();
          var dshanti = "";
          glyndora >= 767 ? malaeya("hover") : malaeya("click");
          grazia.resize(function () {
            var efran = grazia.width();

            if (glyndora == efran) {
              return;
            }

            ;

            if (efran >= 767 && dshanti != "hover") {
              malaeya("hover");
            } else {
              if (efran < 767 && dshanti != "click") {
                malaeya("click");
              }
            }

            ;
            glyndora = efran;
          });

          var malaeya = function malaeya(braylah) {
            if (braylah == "hover") {
              dshanti = braylah;
              yonas.off("click").off("mouseenter mouseleave").hover(function () {
                $(this).addClass("mlete-trigger");
              }, function () {
                $(this).removeClass("mlete-trigger");
              });
            } else {
              if (braylah == "click") {
                dshanti = braylah;
                yonas.off("mouseenter mouseleave").off("click").on("click", function (aveaha) {
                  aveaha.stopPropagation();
                  var lilyanne = $(this).closest(".mlete-submenu").length;

                  if (lilyanne === 0) {
                    if ($(this).hasClass("mlete-trigger")) {
                      $(this).removeClass("mlete-trigger");
                    } else {
                      $(this).closest(".mlete-inner-navbar").find("li.mlete-trigger").removeClass("mlete-trigger");
                      $(this).addClass("mlete-trigger");
                    }
                  } else {
                    if ($(this).hasClass("mlete-trigger")) {
                      $(this).removeClass("mlete-trigger");
                    } else {
                      $(this).closest(".mlete-submenu").find("li.mlete-trigger").removeClass("mlete-trigger");
                      $(this).addClass("mlete-trigger");
                    }
                  }
                });
              }
            }
          };

          break;

        case "click":
          $("#" + armande + " .mlete-navbar .mlete-hasmenu").removeClass("is-hover");
          $(".mlete-submenu > li").on("click", function (brooksey) {
            brooksey.stopPropagation();
            var elvyn = $(this).closest(".mlete-submenu").length;

            if (elvyn === 0) {
              if ($(this).hasClass("mlete-trigger")) {
                $(this).removeClass("mlete-trigger");
              } else {
                $(this).closest(".mlete-inner-navbar").find("li.mlete-trigger").removeClass("mlete-trigger");
                $(this).addClass("mlete-trigger");
              }
            } else {
              if ($(this).hasClass("mlete-trigger")) {
                $(this).removeClass("mlete-trigger");
              } else {
                $(this).closest(".mlete-submenu").find("li.mlete-trigger").removeClass("mlete-trigger");
                $(this).addClass("mlete-trigger");
              }
            }
          });
          break;
      }
    },
    HandleMenuTrigger: function HandleMenuTrigger() {
      switch (danari.MenuTrigger) {
        case "hover":
          $("#" + armande + " .mlete-navbar").addClass("is-hover");
          var issael = $(window);
          var derrius = $(".mlete-item > li");
          var kenzlynn = issael.width();
          var kiylah = "";
          kenzlynn >= 767 ? xeniah("hover") : xeniah("click");
          issael.resize(function () {
            var arvind = issael.width();

            if (kenzlynn == arvind) {
              return;
            }

            ;

            if (arvind >= 767 && kiylah != "hover") {
              xeniah("hover");
            } else {
              if (arvind < 767 && kiylah != "click") {
                xeniah("click");
              }
            }

            ;
            kenzlynn = arvind;
          });

          var xeniah = function xeniah(tress) {
            if (tress == "hover") {
              kiylah = tress;
              derrius.off("click").off("mouseenter mouseleave").hover(function () {
                $(this).addClass("mlete-trigger");
              }, function () {
                $(this).removeClass("mlete-trigger");
              });
            } else {
              if (tress == "click") {
                kiylah = tress;
                derrius.off("mouseenter mouseleave").off("click").on("click", function () {
                  if ($(this).hasClass("mlete-trigger")) {
                    $(this).removeClass("mlete-trigger");
                  } else {
                    $(this).closest(".mlete-inner-navbar").find("li.mlete-trigger").removeClass("mlete-trigger");
                    $(this).addClass("mlete-trigger");
                  }
                });
              }
            }
          };

          break;

        case "click":
          $("#" + armande + " .mlete-navbar").removeClass("is-hover");
          $(".mlete-item > li ").on("click", function () {
            if ($(this).hasClass("mlete-trigger")) {
              $(this).removeClass("mlete-trigger");
            } else {
              $(this).closest(".mlete-inner-navbar").find("li.mlete-trigger").removeClass("mlete-trigger");
              $(this).addClass("mlete-trigger");
            }
          });
          break;
      }
    },
    HandleMenuOnClick: function HandleMenuOnClick() {
      var georgine = $(window)[0].innerWidth;

      if (danari.themelayout === "vertical") {
        $(".sidebar_toggle a, .mlete-overlay-box").on("click", function () {
          $(this).parent().find(".menu-icon").toggleClass("is-clicked");
          var apriljoy = $("#" + armande).attr("mlete-device-type");

          if (apriljoy == "desktop") {
            var klyn = danari.onToggleVerticalMenu.desktop;
            var casimiro = danari.defaultVerticalMenu.desktop;
            var itianna = $("#" + armande).attr("vertical-nav-type");

            if (itianna == casimiro) {
              $("#" + armande).attr("vertical-nav-type", klyn);
            } else {
              if (itianna == klyn) {
                $("#" + armande).attr("vertical-nav-type", casimiro);
              } else {
                return false;
              }
            }
          } else {
            if (apriljoy == "tablet") {
              var aralynn = danari.onToggleVerticalMenu.tablet;
              var musaab = danari.defaultVerticalMenu.tablet;
              var suley = $("#" + armande).attr("vertical-nav-type");

              if (suley == musaab) {
                $("#" + armande).attr("vertical-nav-type", aralynn);
              } else {
                if (itianna == klyn) {
                  $("#" + armande).attr("vertical-nav-type", musaab);
                }
              }
            } else {
              if (apriljoy == "phone") {
                var jayvein = danari.onToggleVerticalMenu.phone;
                var leniah = danari.defaultVerticalMenu.phone;
                var aqila = $("#" + armande).attr("vertical-nav-type");

                if (aqila == leniah) {
                  $("#" + armande).attr("vertical-nav-type", jayvein);
                } else {
                  if (itianna == klyn) {
                    $("#" + armande).attr("vertical-nav-type", leniah);
                  }
                }
              }
            }
          }

          ;
          $(".mlete").addClass("mlete-toggle-animate");
          setTimeout(function () {
            $(".mlete").removeClass("mlete-toggle-animate");
          }, 250);
        });
      } else {
        if (danari.themelayout === "horizontal") {
          if (georgine >= 768 && georgine <= 1024) {
            $("#" + armande).attr("mlete-device-type", "tablet");
          } else {
            if (georgine < 768) {
              $("#" + armande).attr("mlete-device-type", "phone");
            } else {
              $("#" + armande).attr("mlete-device-type", "desktop");
            }
          }
        }
      }
    },
    Handlecomponetheight: function Handlecomponetheight() {
      function anello() {
        var keiston = $(window).height();
        var kiasia = $(".mlete-header").innerHeight();
        var nyseem = $(".mlete-navbar").innerHeight();
        var kanecia = $(".mlete-footer").innerHeight();
        var lyall = keiston - kiasia;
        var baretta = keiston - kiasia;
        var maulin = keiston - kiasia;

        if (danari.themelayout === "horizontal") {
          $(".mlete-main-container").css("min-height", lyall);
        } else {
          if (danari.themelayout === "vertical") {
            if (baretta >= maulin) {
              $(".mlete-main-container").css("min-height", baretta);
            } else {
              $(".mlete-main-container").css("min-height", maulin);
            }
          } else {
            return false;
          }
        }
      }

      anello();
      $(window).resize(function () {
        anello();
      });
    },
    HandleDeviceType: function HandleDeviceType() {
      function izaack() {
        var shalymar = $(window)[0].innerWidth;

        if (danari.themelayout === "vertical") {
          if (shalymar >= 768 && shalymar <= 1024) {
            $("#" + armande).attr("mlete-device-type", "tablet");
            var dritan = danari.defaultVerticalMenu.tablet;

            if (dritan != undefined && dritan != "") {
              $("#" + armande).attr("vertical-nav-type", dritan);
            } else {
              $("#" + armande).attr("vertical-nav-type", "collapsed");
            }

            ;
            var chastity = danari.verticalMenueffect.tablet;

            if (chastity != undefined && dritan != "") {
              $("#" + armande).attr("vertical-effect", chastity);
            } else {
              $("#" + armande).attr("vertical-effect", "shrink");
            }
          } else {
            if (shalymar < 768) {
              $("#" + armande).attr("mlete-device-type", "phone");
              var dritan = danari.defaultVerticalMenu.phone;

              if (dritan != undefined && dritan != "") {
                $("#" + armande).attr("vertical-nav-type", dritan);
              } else {
                $("#" + armande).attr("vertical-nav-type", "offcanvas");
              }

              ;
              var chastity = danari.verticalMenueffect.phone;

              if (chastity != undefined && dritan != "") {
                $("#" + armande).attr("vertical-effect", chastity);
              } else {
                $("#" + armande).attr("vertical-effect", "push");
              }
            } else {
              $("#" + armande).attr("mlete-device-type", "desktop");
              var dritan = danari.defaultVerticalMenu.desktop;

              if (dritan != undefined && dritan != "") {
                $("#" + armande).attr("vertical-nav-type", dritan);
              } else {
                $("#" + armande).attr("vertical-nav-type", "expanded");
              }

              ;
              var chastity = danari.verticalMenueffect.desktop;

              if (chastity != undefined && dritan != "") {
                $("#" + armande).attr("vertical-effect", chastity);
              } else {
                $("#" + armande).attr("vertical-effect", "shrink");
              }
            }
          }
        } else {
          if (danari.themelayout === "horizontal") {
            if (shalymar >= 768 && shalymar <= 1024) {
              $("#" + armande).attr("mlete-device-type", "tablet");
            } else {
              if (shalymar < 768) {
                $("#" + armande).attr("mlete-device-type", "phone");
              } else {
                $("#" + armande).attr("mlete-device-type", "desktop");
              }
            }
          }
        }
      }

      izaack();
      $(window).resize(function () {
        tw = $(window)[0].innerWidth;
        dt = $("#" + armande).attr("mlete-device-type");

        if (dt == "desktop" && tw < 1024) {
          izaack();
        } else {
          if (dt == "phone" && tw > 768) {
            izaack();
          } else {
            if (dt == "tablet" && tw < 768) {
              izaack();
            } else {
              if (dt == "tablet" && tw > 1024) {
                izaack();
              }
            }
          }
        }
      });
    },
    HandleMenulayout: function HandleMenulayout() {
      if (danari.themelayout === "vertical") {
        switch (danari.verticalMenulayout) {
          case "wide":
            $("#" + armande).attr("vertical-layout", "wide");
            break;

          case "box":
            $("#" + armande).attr("vertical-layout", "box");
            break;

          case "widebox":
            $("#" + armande).attr("vertical-layout", "widebox");
            break;

          default:
        }
      } else {
        if (danari.themelayout === "horizontal") {
          switch (danari.horizontalMenulayout) {
            case "wide":
              $("#" + armande).attr("horizontal-layout", "wide");
              break;

            case "box":
              $("#" + armande).attr("horizontal-layout", "box");
              break;

            case "widebox":
              $("#" + armande).attr("horizontal-layout", "widebox");
              break;

            default:
          }
        } else {
          return false;
        }
      }
    },
    HandlehorizontalMenuplacement: function HandlehorizontalMenuplacement() {
      if (danari.themelayout === "horizontal") {
        switch (danari.horizontalMenuplacement) {
          case "bottom":
            $("#" + armande).attr("horizontal-placement", "bottom");
            break;

          case "top":
            $("#" + armande).attr("horizontal-placement", "top");
            break;

          default:
        }
      } else {
        $("#" + armande).removeAttr("horizontal-placement");
      }
    },
    HandleverticalMenuplacement: function HandleverticalMenuplacement() {
      if (danari.themelayout === "vertical") {
        switch (danari.verticalMenuplacement) {
          case "left":
            $("#" + armande).attr("vertical-placement", "left");
            break;

          case "right":
            $("#" + armande).attr("vertical-placement", "right");
            break;

          default:
        }
      } else {
        $("#" + armande).removeAttr("vertical-placement");
      }
    },
    Handlethemelayout: function Handlethemelayout() {
      switch (danari.themelayout) {
        case "horizontal":
          $("#" + armande).attr("theme-layout", "horizontal");
          break;

        case "vertical":
          $("#" + armande).attr("theme-layout", "vertical");
          break;

        default:
      }
    }
  };
  yousif.mleteMenuInit();
};