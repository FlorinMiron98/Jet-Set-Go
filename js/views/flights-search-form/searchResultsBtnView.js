// Import views
import personsSelectionBtnView from "./personsSelectionBtnView";
import personsSelectionView from "./personsSelectionView";
import flightClassSelectionView from "./flightClassSelectionView";
import departureLocationSearchView from "./departureLocationSearchView";
import arrivalLocationSearchView from "./arrivalLocationSearchView";
import datePickerView from "./datePickerView";

// Import tippy.js library
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

class SearchResultsBtnView {
  _searchBtn = document.querySelector(".search-button");

  // Each value of this object will serve as a query parameter
  _queryStringValues = {
    persons: {
      adults: 0,
      children: [],
    },
    flightClass: "",
    departureLocationId: "",
    arrivalLocationId: "",
    departureDate: "",
    returnDate: "",
  };

  // Pass the handler function from the controller to the click event listener
  _addHandlerCreateQueries(handler) {
    this._searchBtn.addEventListener("click", handler);
  }

  _assignQueryParameterValues() {
    // tippy options object
    const tippyOptions = {
      placement: "top",
      arrow: true,
      theme: "warning",
      animation: "fade-custom",
      content: "",
      trigger: "manual",
    };

    // Assign the number of adults to the queryStringValues object
    this._queryStringValues.persons.adults = personsSelectionView._adults;

    // Children age validator
    // Check if the number of children is bigger than 0
    if (personsSelectionView._childrenSelectAgeEl.length > 0) {
      for (const el of personsSelectionView._childrenSelectAgeEl) {
        if (!el.value) {
          // Create the form validation using tippy for UX
          const content = "Select all children age!";
          const instanceEl = personsSelectionBtnView._personsBtn;
          this._formValidator(content, instanceEl, tippyOptions);
          return;
        } else {
          // Assign the value of each child's age to the queryStringValues object (converted into a number type)
          this._queryStringValues.persons.children.push(+el.value);
        }
      }
    }

    // Ass the default value is Economy, the flight class selection won't need a form validation
    this._queryStringValues.flightClass =
      flightClassSelectionView._flightClassQuery;

    // Departure location validator
    if (!departureLocationSearchView._departureLocationId) {
      const content = "Enter a departure location!";
      const instanceEl =
        departureLocationSearchView._searchLocationWrapper.querySelector(
          ".input-wrapper"
        );
      this._formValidator(content, instanceEl, tippyOptions);
      return;
    } else {
      // Assign the value of the departure location id to the queryStringValues object
      this._queryStringValues.departureLocationId =
        departureLocationSearchView._departureLocationId;
    }

    // Arrival location validator
    if (!arrivalLocationSearchView._arrivalLocationId) {
      const content = "Enter an arrival location!";
      const instanceEl =
        arrivalLocationSearchView._searchLocationWrapper.querySelector(
          ".input-wrapper"
        );
      this._formValidator(content, instanceEl, tippyOptions);
      return;
    } else {
      // Assign the value of the arrival location id to the queryStringValues object
      this._queryStringValues.arrivalLocationId =
        arrivalLocationSearchView._arrivalLocationId;
    }

    // Departure date validator
    if (!datePickerView._queryValues.departureDate) {
      const content = "Enter a departure date!";
      const instanceEl =
        datePickerView._departureDateWrapper.querySelector(".input-wrapper");
      this._formValidator(content, instanceEl, tippyOptions);
      return;
    } else {
      // Assign the value of the departure date to the queryStringValues object
      this._queryStringValues.departureDate =
        datePickerView._queryValues.departureDate.formattedDate
          .split("/")
          .join("-");
    }

    // As the return date is optional, it doesn't need to be validated
    if (datePickerView._queryValues.returnDate) {
      this._queryStringValues.returnDate =
        datePickerView._queryValues.returnDate.formattedDate
          .split("/")
          .join("-");
    }

    // Set the href attribute dynamically while adding all the user's input data stored as query parameters
    this._searchBtn.setAttribute(
      "href",
      this._generateQueryParametersMarkup(this._queryStringValues)
    );
  }

  // A method to help with the form validation created in order to avoid repetitive code
  _formValidator(content, instanceEl, tippyOptions) {
    // Create the form validation using tippy for UX
    tippyOptions.content = content;
    const tippyInstance = tippy(instanceEl, tippyOptions);
    tippyInstance.show();

    // Hide the tippy box after 3 seconds
    setTimeout(() => tippyInstance.hide(), 3000);
  }

  _generateQueryParametersMarkup(queryValues) {
    // As the children ages will be stored in an array, we have to take into consideration the size of the array
    let childrenAges;

    if (queryValues.persons.children.length === 1) {
      childrenAges = queryValues.persons.children[0];
    }
    if (queryValues.persons.children.length === 0) {
      childrenAges = "";
    }
    if (queryValues.persons.children.length > 1) {
      // '%2C' is the URL-encoded representation of a comma (,) character.
      childrenAges = queryValues.persons.children.join("%2C");
    }

    const adults = queryValues.persons.adults;
    const flightClass = queryValues.flightClass;
    const departureLocationId = queryValues.departureLocationId;
    const arrivalLocationId = queryValues.arrivalLocationId;
    const departureDate = queryValues.departureDate;
    const returnDate = queryValues.returnDate;

    const URL = `results.html?adults=${adults}&children=${childrenAges}&flightClass=${flightClass}&departureLocationId=${departureLocationId}&arrivalLocationId=${arrivalLocationId}&departureDate=${departureDate}&returnDate=${returnDate}`;

    return URL;
  }
}

export default new SearchResultsBtnView();
