import sideNavbarView from "./views/sideNavbarView.js";
import navbarView from "./views/navbarView.js";
import searchFormView from "./views/searchFormView.js";
import headerContentView from "./views/headerContentView.js";
import personsSelectionView from "./views/flights-search-form/personsSelectionView.js";

const controlSelectPersons = function () {
  // Generate persons selection markup
  personsSelectionView._generateAdultsMarkup();
  personsSelectionView._generateChildrenMarkup();

  // Set dynamic styling for children age selectors parent element
  personsSelectionView._hideChildrenSelectAgeParentEl();

  // Add the functionality for selecting the number of persons
  personsSelectionView._adultsCounter();
  personsSelectionView._childrenCounter();

  // Add the functionality for selection done
  searchFormView._hideSelectionDropdown();
};

const init = function () {
  navbarView.setDynamicStyling();
  personsSelectionView._addHandlerRender(controlSelectPersons);
  sideNavbarView.setDynamicStyling();
  sideNavbarView.toggleSideNavbar();
  searchFormView._setDropdownDynamicStyling();
  searchFormView._showSelectionDropdown();
  headerContentView.setDynamicStyling();
};

init();
