// Model import
import * as model from "./model.js";

// Views imports
import navbarView from "./views/navbarView.js";
import sideNavbarView from "./views/sideNavbarView.js";
import headerContentView from "./views/headerContentView.js";
import searchFormView from "./views/searchFormView.js";
import personsSelectionView from "./views/flights-search-form/personsSelectionView.js";
import personsSelectionBtnView from "./views/flights-search-form/personsSelectionBtnView.js";
import flightClassSelectionView from "./views/flights-search-form/flightClassSelectionView.js";
import flightClassSelectionBtnView from "./views/flights-search-form/flightClassSelectionBtnView.js";
import departureLocationSearchView from "./views/flights-search-form/departureLocationSearchView.js";
import arrivalLocationSearchView from "./views/flights-search-form/arrivalLocationSearchView.js";
import reverseInputValuesView from "./views/flights-search-form/reverseInputValuesView.js";

const controlSelectPersons = function () {
  // Generate persons selection markup
  personsSelectionView._generateAdultsMarkup();
  personsSelectionView._generateChildrenMarkup();

  // Set dynamic styling for children age selectors parent element
  personsSelectionView._hideChildrenSelectAgeParentEl();

  // Add the functionality for selecting the number of persons
  personsSelectionView._adultsCounter();
  personsSelectionView._childrenCounter();

  // Dynamically update the content of the persons dropdown button
  personsSelectionBtnView._generateMarkup(
    personsSelectionView._adults,
    personsSelectionView._children
  );

  // Add the functionality for selection done
  searchFormView._hideSelectionDropdown();
};

const controlSelectFlightClass = function () {
  // Select flight class
  flightClassSelectionView._selectFlightClass();

  // Dynamically update the select flight class button text content
  flightClassSelectionBtnView._generateMarkup(
    flightClassSelectionView._selectedBtn
  );
};

const controlDepartureSearchLocations = async function () {
  try {
    // Render spinner
    departureLocationSearchView._renderSpinner();

    // Get search query
    const query = departureLocationSearchView._getQuery();
    if (!query) return;

    // Load search results
    await model.loadSearchFlightsResults(
      query,
      departureLocationSearchView._transit
    );

    // Render results
    departureLocationSearchView._renderMarkup(
      model.state.locationResults.departureLocationResults,
      departureLocationSearchView._transit
    );
  } catch (error) {
    departureLocationSearchView._renderError(error.message);
  }
};

const controlArrivalSearchLocations = async function () {
  // Render spinner
  arrivalLocationSearchView._renderSpinner();

  // Get search query
  const query = arrivalLocationSearchView._getQuery();
  if (!query) return;

  // Load search results
  await model.loadSearchFlightsResults(
    query,
    arrivalLocationSearchView._transit
  );

  // Render results
  arrivalLocationSearchView._renderMarkup(
    model.state.locationResults.arrivalLocationResults,
    arrivalLocationSearchView._transit
  );
};

const controlDepartureSearchLoseFocus = function () {
  // Hide the results container
  departureLocationSearchView._hideContainerResults();

  // Clear the markup
  departureLocationSearchView._clearMarkup();
};

const controlArrivalSearchLoseFocus = function () {
  // Hide the results container
  arrivalLocationSearchView._hideContainerResults();

  // Clear the markup
  arrivalLocationSearchView._clearMarkup();
};

const controlReverseInputValues = function () {
  // Extract the values and store them into variables
  const departureLocationValue =
    departureLocationSearchView._searchLocationInput.value;
  const arrivalLocationValue =
    arrivalLocationSearchView._searchLocationInput.value;

  // Assign the new values
  departureLocationSearchView._searchLocationInput.value = arrivalLocationValue;
  arrivalLocationSearchView._searchLocationInput.value = departureLocationValue;
};

const init = function () {
  personsSelectionView._addHandlerRender(controlSelectPersons);
  flightClassSelectionView._addHandlerRender(controlSelectFlightClass);
  departureLocationSearchView._addHandlerSearch(
    controlDepartureSearchLocations
  );
  arrivalLocationSearchView._addHandlerSearch(controlArrivalSearchLocations);

  departureLocationSearchView._addHandlerLoseFocus(
    controlDepartureSearchLoseFocus
  );
  arrivalLocationSearchView._addHandlerLoseFocus(controlArrivalSearchLoseFocus);
  departureLocationSearchView._assignInputValue();
  arrivalLocationSearchView._assignInputValue();
  reverseInputValuesView._addHandlerReverseValues(controlReverseInputValues);

  // Dynamic styling
  navbarView.setDynamicStyling();
  sideNavbarView.setDynamicStyling();
  sideNavbarView.toggleSideNavbar();
  searchFormView._setDropdownDynamicStyling();
  searchFormView._showSelectionDropdown();
  headerContentView.setDynamicStyling();
};

init();
