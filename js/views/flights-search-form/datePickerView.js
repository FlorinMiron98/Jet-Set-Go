import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeEn from "air-datepicker/locale/en";

class DatePickerView {
  _departureDate = document.getElementById("departure-date");
  _arrivalDate = document.getElementById("return-date");

  // Dynamically create the today date
  _today = new Date().toISOString().split("T")[0];

  _datepickerOptions = {
    position: "bottom center",
    buttons: ["clear"],
    locale: localeEn,
    minDate: this._today,
  };

  _setDatePicker() {
    new AirDatepicker(this._departureDate, this._datepickerOptions);
    new AirDatepicker(this._arrivalDate, this._datepickerOptions);
  }
}

export default new DatePickerView();
