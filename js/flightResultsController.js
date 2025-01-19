// Import model
import * as model from "./model";

// Import views
import flightResultsView from "./views/flightResultsView";
import navbarView from "./views/navbarView";
import sideNavbarView from "./views/sideNavbarView";
import headerContentView from "./views/headerContentView";

const controlOnLoadSearch = function () {
  model.loadFlightsSearchResults(flightResultsView._getQueryParameters());
};

const init = function () {
  flightResultsView._addHandlerRender(controlOnLoadSearch);

  // Dynamic styling
  navbarView.setDynamicStyling();
  sideNavbarView.setDynamicStyling();
  sideNavbarView.toggleSideNavbar();
  headerContentView.setDynamicStyling();
};

init();
