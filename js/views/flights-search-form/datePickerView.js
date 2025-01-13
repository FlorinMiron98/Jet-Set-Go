// AirDatepicker library imports
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeEn from "air-datepicker/locale/en";

class DatePickerView {
  // DOM elements
  _departureDate = document.getElementById("departure-date");
  _returnDate = document.getElementById("return-date");
  _departureDateWrapper = document.querySelector(".departure-date-wrapper");
  _arrivalDateWrapper = document.querySelector(".arrival-date-wrapper");

  // This object will store the query parameters values whichi are going to be necessary when the user clicks the search button
  _queryValues = {
    departureDate: "",
    returnDate: "",
  };

  // Dynamically create the today date
  _today = new Date().toISOString().split("T")[0];

  // AirDatepicker options for the departure date
  // The code for the options was taken from https://air-datepicker.com/examples
  _departureOptions = {
    position: "bottom center",
    buttons: ["clear"],
    locale: localeEn,
    minDate: this._today,
    // Assign the selected date to the query values object
    onSelect: (date) => (this._queryValues.departureDate = date),
  };

  // AirDatepicker options for the return date
  // The code for the options was taken from https://air-datepicker.com/examples
  _returnOptions = {
    position: "bottom center",
    buttons: ["clear"],
    locale: localeEn,
    minDate: this._today,
    // Assign the selected date to the query values object
    onSelect: (date) => {
      this._queryValues.returnDate = date;
      console.log(this._queryValues.returnDate);
    },
  };

  // Initialize the date picker library for the departure date and return date inputs
  // The code for initializing the date picker was taken from https://air-datepicker.com/examples
  _setDatePicker() {
    new AirDatepicker(this._departureDate, this._departureOptions);
    new AirDatepicker(this._returnDate, this._returnOptions);
  }
}

export default new DatePickerView();
