import sideNavbarView from "./views/sideNavbarView.js";
import navbarView from "./views/navbarView.js";
import searchFormView from "./views/searchFormView.js";
import headerContentView from "./views/headerContentView.js";

const init = function () {
  navbarView.setDynamicStyling();
  sideNavbarView.setDynamicStyling();
  sideNavbarView.toggleSideNavbar();
  searchFormView.setDropdownDynamicStyling();
  headerContentView.setDynamicStyling();
};

init();
