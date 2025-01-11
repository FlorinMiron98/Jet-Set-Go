import personsSelectionView from "./personsSelectionView";
import flightClassSelectionView from "./flightClassSelectionView";
import departureLocationSearchView from "./departureLocationSearchView";
import arrivalLocationSearchView from "./arrivalLocationSearchView";
import datePickerView from "./datePickerView";

class SearchResultsBtnView {
  _searchBtn = document.querySelector(".search-button");

  _addHandlerCreateQueries(handler) {
    this._searchBtn.addEventListener("click", () => {
      handler();
    });
  }

  _checkValues() {
    for (const el of personsSelectionView._childrenSelectAgeEl) {
      if (!el.value) {
        console.log("Please select children age");
      }
      console.log(el.value);
    }

    console.log(flightClassSelectionView._flightClassQuery);

    console.log(departureLocationSearchView._departureLocationId);

    console.log(arrivalLocationSearchView._arrivalLocationId);

    console.log(datePickerView._queryValues.departureDate.formattedDate);
    console.log(datePickerView._queryValues.returnDate.formattedDate);
  }
}

export default new SearchResultsBtnView();
