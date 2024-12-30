import sideNavbarView from "./views/sideNavbarView.js";
import navbarView from "./views/navbarView.js";
import searchFormView from "./views/searchFormView.js";

const init = function () {
  navbarView.setDynamicStyling();
  sideNavbarView.setDynamicMargin();
  sideNavbarView.toggleSideNavbar();
  searchFormView.setDropdownDynamicStyling();
};

init();
