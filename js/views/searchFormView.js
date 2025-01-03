class SearchFormView {
  _dropdownInputsContainer = document.querySelector(
    ".dropdown-inputs-container"
  );
  _flightPersonsDropdownBtn = document.getElementById(
    "flight-persons-dropdown-btn"
  );
  _flightClassDropdownBtn = document.getElementById(
    "flight-class-dropdown-btn"
  );
  _personsSelectionDropdown = document.querySelector(".persons-selection");
  _flightClassDropdown = document.querySelector(".flight-class-selection");
  _selectionDoneBtns = document.querySelectorAll(".selection-done-btn");

  _setDropdownDynamicStyling() {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, () => {
        const parentSizes =
          this._dropdownInputsContainer.getBoundingClientRect();
        const selectPersonsBtnSizes =
          this._flightPersonsDropdownBtn.getBoundingClientRect();
        const selectFlightClassBtnSizes =
          this._flightClassDropdownBtn.getBoundingClientRect();

        this._personsSelectionDropdown.style.top = `${
          selectPersonsBtnSizes.height + 10
        }px`;
        this._flightClassDropdown.style.top = `${parentSizes.height + 10}px`;
        this._flightClassDropdown.style.left = `${
          selectFlightClassBtnSizes.left - parentSizes.left
        }px`;
      });
    });
  }

  _showSelectionDropdown() {
    this._dropdownInputsContainer.addEventListener("click", (e) => {
      const visibleDropdowns = document.querySelectorAll(".dropdown-visible");

      if (e.target.closest("#flight-persons-dropdown-btn")) {
        visibleDropdowns.forEach((e) => e.classList.remove("dropdown-visible"));
        this._personsSelectionDropdown.classList.add("dropdown-visible");
        this._personsSelectionDropdown.scrollIntoView(false);
      }
      if (e.target.closest("#flight-class-dropdown-btn")) {
        visibleDropdowns.forEach((e) => e.classList.remove("dropdown-visible"));
        this._flightClassDropdown.classList.add("dropdown-visible");
        this._flightClassDropdown.scrollIntoView(false);
      }
    });
  }

  _hideSelectionDropdown() {
    this._selectionDoneBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.target
          .closest(".dropdown-visible")
          .classList.remove("dropdown-visible");
      });
    });
  }
}

export default new SearchFormView();
