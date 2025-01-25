// Import model
import * as model from "./model";

// Import views
import flightResultsView from "./views/flightResultsView";
import navbarView from "./views/navbarView";
import sideNavbarView from "./views/sideNavbarView";
import headerContentView from "./views/headerContentView";
import flightsOffersView from "./views/flights-search-results/flightsOffersView";
import detailsDialogView from "./views/flights-search-results/detailsDialogView";

const controlOnLoadSearch = function () {
  model.loadFlightsSearchResults(flightResultsView._getQueryParameters());
};

const controlDisplayFlightsOffers = async function () {
  try {
    // Render Spinner
    flightsOffersView._renderSpinner();

    // Fetch the flights offers
    await model.loadFlightsSearchResults(
      flightResultsView._getQueryParameters()
    );

    // Render markup
    flightsOffersView._renderMarkup(model.state);
  } catch (error) {
    flightsOffersView._renderError();
  }
};

const controlDisplayDialog = function () {
  detailsDialogView._displayDialog();
};

const controlHideDialog = function () {
  detailsDialogView._hideDialog();
};

const init = function () {
  flightResultsView._addHandlerRender(controlOnLoadSearch);
  flightsOffersView._addHandlerLoadFlightsOffers(controlDisplayFlightsOffers);

  detailsDialogView._addHandlerDisplayDialog(controlDisplayDialog);
  detailsDialogView._addHandlerHideDialog(controlHideDialog);

  // Dynamic styling
  navbarView.setDynamicStyling();
  sideNavbarView.setDynamicStyling();
  sideNavbarView.toggleSideNavbar();
  headerContentView.setDynamicStyling();
};

init();
