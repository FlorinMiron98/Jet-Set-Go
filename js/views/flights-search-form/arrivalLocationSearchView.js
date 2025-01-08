import SearchLocationView from "./locationSearchView.js";

class ArrivalLocationSearchView extends SearchLocationView {
  _parentEl = document.querySelector(".arrival-location-results");
  _searchResultsList = document.querySelector(".arrival-location-results-list");
  _searchLocationInput = document.getElementById("arrival-location");

  _transit = "arrival";
}

export default new ArrivalLocationSearchView();
