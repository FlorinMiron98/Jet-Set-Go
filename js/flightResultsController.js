// Import model
import * as model from "./model";

// Import views
import flightResultsView from "./views/flightResultsView";
import navbarView from "./views/navbarView";
import sideNavbarView from "./views/sideNavbarView";
import headerContentView from "./views/headerContentView";
import filtersBtnView from "./views/flights-search-results/filtersBtnView";

const controlOnLoadSearch = function () {
  model.loadFlightsSearchResults(flightResultsView._getQueryParameters());
};

const controlDisplayDialog = function () {
  filtersBtnView._displayDialog();
};

const controlHideDialog = function () {
  filtersBtnView._hideDialog();
};

const init = function () {
  flightResultsView._addHandlerRender(controlOnLoadSearch);
  filtersBtnView._addHandlerDisplayDialog(controlDisplayDialog);
  filtersBtnView._addHandlerHideDialog(controlHideDialog);

  // Dynamic styling
  navbarView.setDynamicStyling();
  sideNavbarView.setDynamicStyling();
  sideNavbarView.toggleSideNavbar();
  headerContentView.setDynamicStyling();
};

init();
