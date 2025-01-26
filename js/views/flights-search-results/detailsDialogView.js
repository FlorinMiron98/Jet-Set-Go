class DetailsDialogView {
  // DOM Elements
  _detailsDialog = document.querySelector(".details-dialog");
  _resultsList = document.querySelector(".results-list");
  _closeDialogBtn = document.querySelector(".close-dialog-btn");
  _parentEl = document.querySelector(".details-dialog main");

  _addHandlerDisplayDialog(handler) {
    this._resultsList.addEventListener("click", (e) => {
      if (e.target.closest(".view-details-btn")) {
        const detailsBtn = e.target;
        const flightItem = detailsBtn.closest(".flight-item");
        const token = flightItem.dataset.token;

        handler(token);
      }
    });
  }

  _addHandlerHideDialog(handler) {
    this._closeDialogBtn.addEventListener("click", () => {
      handler();
    });
  }

  _displayDialog() {
    this._detailsDialog.showModal();
    document.body.classList.add("no-scroll");
  }

  _hideDialog() {
    this._detailsDialog.close();
    document.body.classList.remove("no-scroll");
  }

  _clearMarkup() {
    this._parentEl.innerHTML = "";
  }

  _renderSpinner() {
    const markup = `
          <div
            class="loader-container d-flex flex-column align-items-center justify-content-center mt-4"
          >
            <div class="loader"></div>
            <p class="mt-2">Fetching flight details...</p>
          </div>
    `;
    this._clearMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _renderMarkup(data) {
    this._clearMarkup();

    const markup = `
      <!-- Flight Summary Section -->
        <section class="flight-summary-dialog mb-5">
          <h2 class="fw-bold fs-3 mb-1">Flight to London</h2>
          <p class="fs-6">Direct • 3h 30min</p>
          <div class="flight-details">
            <div class="departure-details">
              <h3 class="fs-5 mb-0">LGW • London Gatwick Airport</h3>
              <p>Fri 31 Jan • 13:55</p>
            </div>
            <div class="arrival-details">
              <h3 class="fs-5 mb-0">LGW • London Gatwick Airport</h3>
              <p class="mb-0">Fri 31 Jan • 13:55</p>
            </div>
            <div class="airline-details d-flex mt-3">
              <div class="airline-icon">
                <img
                  src="https://r-xx.bstatic.com/data/airlines_logo/AA.png"
                  alt="Airline Icon"
                  class="w-100 h-100"
                />
              </div>
              <div>
                <p class="airline-name mb-0">Wizz Air</p>
                <p class="flight-duration mb-0">Flight-duration: 3h</p>
                <p class="flight-class mb-0">Economy</p>
              </div>
            </div>
          </div>

          <!-- Layover -->
          <div class="dialog-layover py-5 fs-5 fw-bold">Layover - 1h 50m</div>

          <div class="flight-details">
            <div class="departure-details">
              <h3 class="fs-5 mb-0">LGW • London Gatwick Airport</h3>
              <p>Fri 31 Jan • 13:55</p>
            </div>
            <div class="arrival-details">
              <h3 class="fs-5 mb-0">LGW • London Gatwick Airport</h3>
              <p class="mb-0">Fri 31 Jan • 13:55</p>
            </div>
            <div class="airline-details d-flex mt-3">
              <div class="airline-icon">
                <img
                  src="https://r-xx.bstatic.com/data/airlines_logo/AA.png"
                  alt="Airline Icon"
                  class="w-100 h-100"
                />
              </div>
              <div>
                <p class="airline-name mb-0">Wizz Air</p>
                <p class="flight-duration mb-0">Flight-duration: 3h</p>
                <p class="flight-class mb-0">Economy</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Flight Summary Section -->
        <section class="flight-summary-dialog mb-5">
          <h2 class="fw-bold fs-3 mb-1">Flight to Bucharest</h2>
          <p class="fs-6">Direct • 3h 30min</p>
          <div class="flight-details">
            <div class="departure-details">
              <h3 class="fs-5 mb-0">LGW • London Gatwick Airport</h3>
              <p>Fri 31 Jan • 13:55</p>
            </div>
            <div class="arrival-details">
              <h3 class="fs-5 mb-0">LGW • London Gatwick Airport</h3>
              <p class="mb-0">Fri 31 Jan • 13:55</p>
            </div>
            <div class="airline-details d-flex mt-3">
              <div class="airline-icon">
                <img
                  src="https://r-xx.bstatic.com/data/airlines_logo/AA.png"
                  alt="Airline Icon"
                  class="w-100 h-100"
                />
              </div>
              <div>
                <p class="airline-name mb-0">Wizz Air</p>
                <p class="flight-duration mb-0">Flight-duration: 3h</p>
                <p class="flight-class mb-0">Economy</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Included Baggage -->
        <section class="included-baggage d-flex flex-wrap">
          <header>
            <h2 class="fw-bold fs-3 mb-1">Included Baggage</h2>
            <p class="fs-6 mb-0">The total baggage included in the price</p>
          </header>
          <main>
            <!-- The code for the ordered list is taken from https://getbootstrap.com/docs/5.3/components/list-group/#basic-example -->
            <ol class="included-baggage-offers list-group list-group-numbered">
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
              >
                <div class="me-auto">
                  <div class="fw-bold">
                    <i class="fa-solid fa-suitcase-rolling"></i> Subheading
                  </div>
                  <p class="mb-0">Content for list item</p>
                </div>
                <span class="badge rounded-pill">Included</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
              >
                <div class="me-auto">
                  <div class="fw-bold">
                    <i class="fa-solid fa-suitcase-rolling"></i> Subheading
                  </div>
                  <p class="mb-0">Content for list item</p>
                </div>
                <span class="badge rounded-pill">Included</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
              >
                <div class="me-auto">
                  <div class="fw-bold">
                    <i class="fa-solid fa-suitcase-rolling"></i> Subheading
                  </div>
                  <p class="mb-0">Content for list item</p>
                </div>
                <span class="badge rounded-pill">Included</span>
              </li>
            </ol>
          </main>
        </section>

        <!-- Price and Select Button -->
        <section class="price-container d-flex justify-content-between mt-5">
          <div class="dialog-price fs-1 fw-bold">£${data.flightDetails.price}</div>
          <button
            class="dialog-select-btn px-4 fs-5 fw-bold rounded-3 focus-ring text-white"
          >
            Select
          </button>
        </section>
      `;
  }
}

export default new DetailsDialogView();
