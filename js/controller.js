import sideNavbarView from "./views/sideNavbarView.js";
import navbarView from "./views/navbarView.js";
import searchFormView from "./views/searchFormView.js";
import headerContentView from "./views/headerContentView.js";
import personsSelectionView from "./views/flights-search-form/personsSelectionView.js";
import personsSelectionBtnView from "./views/flights-search-form/personsSelectionBtnView.js";

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
