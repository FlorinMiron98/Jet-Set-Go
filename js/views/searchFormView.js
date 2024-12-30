class SearchFormView {
  dropdownInputsContainer = document.querySelector(
    ".dropdown-inputs-container"
  );
  flightPersonsDropdownBtn = document.getElementById(
    "flight-persons-dropdown-btn"
  );
  flightClassDropdownBtn = document.getElementById("flight-class-dropdown-btn");
  personsSelectionDropdown = document.querySelector(".persons-selection");
  flightClassDropdown = document.querySelector(".flight-class-selection");

  setDropdownDynamicStyling() {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, () => {
        const parentSizes =
          this.dropdownInputsContainer.getBoundingClientRect();
        const selectPersonsBtnSizes =
          this.flightPersonsDropdownBtn.getBoundingClientRect();
        const selectFlightClassBtnSizes =
          this.flightClassDropdownBtn.getBoundingClientRect();

        this.personsSelectionDropdown.style.top = `${selectPersonsBtnSizes.height}px`;
        this.flightClassDropdown.style.top = `${parentSizes.height}px`;
        this.flightClassDropdown.style.left = `${
          selectFlightClassBtnSizes.left - parentSizes.left
        }px`;
      });
    });
  }
}

export default new SearchFormView();
