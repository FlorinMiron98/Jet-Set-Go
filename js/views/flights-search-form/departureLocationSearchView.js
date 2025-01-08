import searchLocationView from "./locationSearchView.js";

class DepartureLocationSearchView extends searchLocationView {
  _parentEl = document.querySelector(".departure-location-results");
  _searchResultsList = document.querySelector(
    ".departure-location-results-list"
  );
  _searchLocationInput = document.getElementById("departure-location");

  _transit = "departure";
}

export default new DepartureLocationSearchView();
