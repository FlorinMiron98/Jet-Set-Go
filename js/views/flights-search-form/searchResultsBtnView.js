import personsSelectionView from "./personsSelectionView";
import flightClassSelectionView from "./flightClassSelectionView";
import departureLocationSearchView from "./departureLocationSearchView";
import arrivalLocationSearchView from "./arrivalLocationSearchView";
import datePickerView from "./datePickerView";

class SearchResultsBtnView {
  _parentEl = document.querySelector(".inputs-container");

  _queryStringValues = {
    persons: {
      adults: 0,
      children: [],
    },
    flightClass: "",
    departureLocationId: "",
    arrivalLocationId: "",
    departureDate: "",
    // Dynamically check if the return date was selected by the user and assign the value
    ...(datePickerView._queryValues.returnDate && {
      returnDate: datePickerView._queryValues.returnDate,
    }),
  };

  _addHandlerCreateQueries(handler) {
    this._parentEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("search-button")) {
        handler();
      }
      return;
    });
  }

  _checkValues() {
    this._queryStringValues.persons.adults = personsSelectionView._adults;

    for (const el of personsSelectionView._childrenSelectAgeEl) {
      if (!el.value) {
        console.log("Please select children age");
      } else {
        this._queryStringValues.persons.children.push(+el.value);
      }
      console.log(el.value);
    }

    this._queryStringValues.flightClass =
      flightClassSelectionView._flightClassQuery;

    this._queryStringValues.departureLocationId =
      departureLocationSearchView._departureLocationId;

    this._queryStringValues.arrivalLocationId =
      arrivalLocationSearchView._arrivalLocationId;

    this._queryStringValues.departureDate =
      datePickerView._queryValues.departureDate.formattedDate
        .split("/")
        .join("-");

    this._queryStringValues.returnDate =
      datePickerView._queryValues.returnDate.formattedDate.split("/").join("-");

    console.log(this._queryStringValues);
  }
}

export default new SearchResultsBtnView();
