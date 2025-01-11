import flightClassSelectionBtnView from "./flightClassSelectionBtnView";

class FlightClassSelectionView {
  _flightClassBtns = document.querySelectorAll(".flight-class-btn");
  _flightClassQuery = "ECONOMY";
  _selectedBtn;

  _addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _selectFlightClass() {
    this._flightClassBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this._flightClassBtns.forEach((btn) => {
          btn.classList.remove("selected");
        });
        btn.classList.add("selected");
        this._selectedBtn = btn;
        this._flightClassQuery = btn.dataset.flightClass;

        flightClassSelectionBtnView._generateMarkup(
          this._selectedBtn.textContent
        );
      });
    });
  }
}

export default new FlightClassSelectionView();
