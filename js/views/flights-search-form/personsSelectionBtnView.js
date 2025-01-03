class PersonsSelectionBtnView {
  _personsBtn = document.getElementById("flight-persons-dropdown-btn");

  _generateMarkup(adults, children) {
    this._clearMarkup();
    const markup = `
    <i class="fa-solid fa-user-group"></i>
              <span>${adults}</span>
              Adult${adults > 1 ? "s" : ""},
              <span>${children}</span>
              Child${children > 1 ? "ren" : ""}
    <i class="fa-solid fa-chevron-down"></i>
    `;

    this._personsBtn.insertAdjacentHTML("afterbegin", markup);
  }

  _clearMarkup() {
    this._personsBtn.innerHTML = "";
  }
}

export default new PersonsSelectionBtnView();