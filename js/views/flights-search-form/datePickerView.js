import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeEn from "air-datepicker/locale/en";

class DatePickerView {
  _departureDate = document.getElementById("departure-date");
  _returnDate = document.getElementById("return-date");

  _queryValues = {
    departureDate: "",
    returnDate: "",
  };

  // Dynamically create the today date
  _today = new Date().toISOString().split("T")[0];

  _departureOptions = {
    position: "bottom center",
    buttons: ["clear"],
    locale: localeEn,
    minDate: this._today,
    onSelect: (date) => {
      this._queryValues.departureDate = date;
      console.log(this._queryValues.departureDate);
    },
  };

  _returnOptions = {
    position: "bottom center",
    buttons: ["clear"],
    locale: localeEn,
    minDate: this._today,
    onSelect: (date) => {
      this._queryValues.returnDate = date;
      console.log(this._queryValues.returnDate);
    },
  };

  _setDatePicker() {
    new AirDatepicker(this._departureDate, this._departureOptions);
    new AirDatepicker(this._returnDate, this._returnOptions);
  }
}

export default new DatePickerView();
