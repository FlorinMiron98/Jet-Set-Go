import sideNavbarView from "./views/sideNavbarView.js";
import navbarView from "./views/navbarView.js";

const init = function () {
  navbarView.setDynamicStyling();
  sideNavbarView.setDynamicMargin();
  sideNavbarView.displaySideNavbar();
};

init();
