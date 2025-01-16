import * as model from "./model";

import flightResultsView from "./views/flightResultsView";

const controlLoadURL = function () {
  flightResultsView._getQueryParameters();
};

const init = function () {
  flightResultsView._addHandlerLoad(controlLoadURL);
};

init();
