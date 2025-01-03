class FlightClassSelectionBtnView {
  _flightsClassBtn = document.getElementById("flight-class-dropdown-btn");

  _generateMarkup(flightClass = "Economy") {
    this._clearMarkup();
    const markup = `
    <i class="fa-solid fa-plane-circle-check"></i>
              <span>${flightClass}</span>
    <i class="fa-solid fa-chevron-down"></i>
    `;

    this._flightsClassBtn.insertAdjacentHTML("afterbegin", markup);
  }

  _clearMarkup() {
    this._flightsClassBtn.innerHTML = "";
  }
}

export default new FlightClassSelectionBtnView();
