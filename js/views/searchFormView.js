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
  selectionDoneBtns = document.querySelectorAll(".selection-done-btn");

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

  showSelectionDropdown() {
    this.dropdownInputsContainer.addEventListener("click", (e) => {
      const visibleDropdowns = document.querySelectorAll(".dropdown-visible");

      if (e.target.closest("#flight-persons-dropdown-btn")) {
        visibleDropdowns.forEach((e) => e.classList.remove("dropdown-visible"));
        this.personsSelectionDropdown.classList.add("dropdown-visible");
        this.personsSelectionDropdown.scrollIntoView(false);
      }
      if (e.target.closest("#flight-class-dropdown-btn")) {
        visibleDropdowns.forEach((e) => e.classList.remove("dropdown-visible"));
        this.flightClassDropdown.classList.add("dropdown-visible");
        this.flightClassDropdown.scrollIntoView(false);
      }
    });
  }

  hideSelectionDropdown() {
    this.selectionDoneBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.target
          .closest(".dropdown-visible")
          .classList.remove("dropdown-visible");
      });
    });
  }
}

export default new SearchFormView();
