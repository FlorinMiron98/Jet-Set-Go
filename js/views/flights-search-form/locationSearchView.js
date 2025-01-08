export default class LocationSearchView {
  _errorMessage = "No locations found for your query. Please try again!";

  _addHandlerSearch(handler) {
    this._searchLocationInput.addEventListener("input", (e) => {
      e.preventDefault();

      // Display the search results container if the length of the input's value is bigger than 1
      if (this._searchLocationInput.value.length >= 1) {
        this._showContainerResults();
      } else {
        this._hideContainerResults();
      }

      handler();
    });
  }

  _addHandlerLoseFocus(handler) {
    this._searchLocationInput.addEventListener("blur", () => {
      handler();
    });
  }

  _showContainerResults() {
    this._parentEl.classList.add("visible");
  }

  _hideContainerResults() {
    this._parentEl.classList.remove("visible");
  }

  _clearMarkup() {
    this._searchResultsList.innerHTML = "";
  }

  _getQuery() {
    const query = this._searchLocationInput.value;

    return query;
  }

  _renderSpinner() {
    const markup = `
        <div class="loader-container d-flex justify-content-center">
            <div class="loader"></div>
        </div>
    `;
    this._clearMarkup();
    this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
  }

  _renderError(message = this._errorMessage) {
    this._clearMarkup();
    const markup = `
      <div class="error">
            <p>${message}</p>
      </div>
    `;
    this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
  }

  _renderMarkup(data, transit) {
    this._clearMarkup();
    const markup = data
      .map((item, index) => {
        const currentItem = data[index];
        const previousItem = data[index - 1];

        if (currentItem.type === "CITY") {
          return `
        <li class="result-list-item">
        <a
            href="#"
            class="${transit}-location-city d-flex align-items-center p-0 p-sm-3 text-decoration-none rounded-3"
            data-id=${item.id}
            >
                  <div class="city-image">
                    <img
                      src=${item.photoUri}
                      alt="City Image"
                      class="w-100 h-100 rounded-3"
                    />
                  </div>
                  <div class="city-details">
                    <h3 class="fs-5 fw-bold">
                      ${item.name}, ${item.regionName}, ${item.countryName}
                      <span class="fw-normal">(${item.code})</span>
                    </h3>
                    <p class="m-0">All airports</p>
                  </div>
        </a>
        </li>
        `;
        }
        if (currentItem.type === "AIRPORT") {
          if (
            previousItem &&
            currentItem.regionName === previousItem.regionName
          ) {
            return `
            <li class="result-list-item ms-3">
                    <a
                      href="#"
                      class="d-flex align-items-center text-decoration-none py-3 px-0 px-sm-3 rounded-3"
                      data-id=${item.id}
                      data-city=${item.city}
                    >
                      <div class="result-icon">
                        <img
                          src="/plane-icon.d3f3c76d.png"
                          class="w-100 h-100"
                          alt="Plane icon"
                        />
                      </div>
                      <div class="result-content">
                        <p class="fw-bold mb-1">${item.code} ${item.name}</p>
                        <p class="m-0">${item.distanceToCity.value.toFixed(2)}${
              item.distanceToCity.unit
            } from city centre</p>
                      </div>
                    </a>
           </li>
          `;
          }

          if (
            (previousItem &&
              currentItem.regionName !== previousItem.regionName) ||
            data.length === 1
          ) {
            return `
            <li class="result-list-item">
                    <a
                      href="#"
                      class="d-flex align-items-center text-decoration-none py-3 px-0 px-sm-3 rounded-3"
                      data-id=${item.id}
                      data-city=${item.city}
                    >
                      <div class="result-icon">
                        <img
                          src="/plane-icon.d3f3c76d.png"
                          class="w-100 h-100"
                          alt="Plane icon"
                        />
                      </div>
                      <div class="result-content">
                        <p class="fw-bold mb-1">${item.code} ${item.name}</p>
                        <p class="m-0">${item.cityName}, ${item.regionName}, ${item.countryName}</p>
                      </div>
                    </a>
           </li>
          `;
          }
          if (data.length === 0) {
            return `
            <li class="result-list-item">
              <p>No locations found for your query. Please try again!</p>
            </li>
            `;
          }
        }
      })
      .join("");
    this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
  }
}
