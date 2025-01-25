class FlightsOffersView {
  // DOM Elements
  _parentEl = document.querySelector(".flights-search-results");

  // Global variables
  _errorMessage = "No flight offers matching your request. Please try again!";

  _addHandlerLoadFlightsOffers(handler) {
    window.addEventListener("load", () => {
      handler();
    });
  }

  // Create the loading spinner markup and render it before displaying the flight offers
  _renderSpinner() {
    const markup = `
        <div class="loader-container d-flex flex-column align-items-center justify-content-center mt-4">
              <div class="loader"></div>
              <p class="mt-2">Searching for flights offers...</p>
        </div>
    `;
    this._clearMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  // This method renders the error message if there is an error in fetching the results
  _renderError(message = this._errorMessage) {
    const markup = `
            <div class="text-center fs-4">${message}</div>
    `;
    this._clearMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _clearMarkup() {
    this._parentEl.innerHTML = "";
  }

  _renderMarkup(data) {
    this._clearMarkup();
    const markup = data.flightsSearchResults.flightOffers
      .map((item) => {
        // Create the date formatter
        const dateFormatter = new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "short",
        });
        const cabinClass = data.flightsSearchResults.cabinClass;

        // The flightDetails variable will handle the markup for the flight details
        let flightDetails;
        let operatingAirline;
        // Check if the legs operating carriers are the same and filter the value (extract the unique value for a proper display)
        const uniqueAirlines = item.segments[0].legs.filter(
          (leg, index, arr) => {
            return (
              index ===
              arr.findIndex(
                (i) =>
                  i.flightInfo.carrierInfo.operatingCarrier ===
                  leg.flightInfo.carrierInfo.operatingCarrier
              )
            );
          }
        );

        // Map through the unique airlines values and return the markup for the airline icon and airline name
        operatingAirline = uniqueAirlines
          .map((leg) => {
            let airlineName;
            let airlineIcon;

            const iataCode = leg.flightInfo.carrierInfo.operatingCarrier;
            const airlines = data.flightsSearchResults.aggregation.airlines;

            for (const airline of airlines) {
              if (airline.iataCode === iataCode) {
                airlineIcon = `
                  <img
                      src=${airline.logoUrl}
                      class="h-100"
                      alt=""
                  />`;
                airlineName = `
                  <figcaption
                    class="airline-name align-self-center m-0 fs-6 fw-bold"
                  >
                    ${airline.name}
                  </figcaption>
                  `;
              }
            }

            return `
            <figure class="airline-icon d-flex mb-2">
                ${airlineIcon || ""}
                ${airlineName || ""}
            </figure>
            `;
          })
          .join("");

        // If the segments length === 1, then the flight type is one-way
        flightDetails = item.segments
          .map((segment) => {
            return `
                  <div
                    class="flight-details d-flex flex-column flex-md-row justify-content-between mb-3"
                  >
                    <div class="airline-content-wrapper mb-2">
                      <div class="airline-content d-flex align-items-center flex-wrap mb-1">
                          ${operatingAirline}
                      </div>
                      <p
                        class="flight-class m-0 fw-bold fs-6 px-4 rounded-3 text-white"
                      > ${cabinClass}
                      </p>
                    </div>
                    <div class="d-flex flex-column">
                      <div class="flight-hours d-flex justify-content-between">
                        <div class="flight-departure-hour fw-bold fs-3">
                          ${this._extractHoursAndMinutes(
                            segment.departureTime.split("T")[1]
                          )}
                        </div>
                        <div
                          class="flight-line d-flex align-self-center align-items-center"
                        >
                          <div class="line"></div>
                          <div><i class="fa-solid fa-plane fs-3"></i></div>
                          <div class="line"></div>
                        </div>
                        <div class="flight-arrival-hour fw-bold fs-3">
                           ${this._extractHoursAndMinutes(
                             segment.arrivalTime.split("T")[1]
                           )}
                        </div>
                      </div>
                      <div
                        class="flight-destinations d-flex justify-content-between"
                      >
                        <div class="flight-location-code fw-bold">
                          ${
                            segment.departureAirport.code
                          } • ${dateFormatter.format(
              new Date(segment.departureTime.split("T")[0])
            )}
                        </div>
                        <div class="flight-duration fw-bold">
                          ${this._calculateFlightHours(segment.totalTime)} • ${
              segment.legs.length - 1 === 0
                ? "Direct"
                : segment.legs.length - 1 + " stops"
            }
                        </div>
                        <div class="flight-location-code fw-bold">
                        ${segment.arrivalAirport.code} • ${dateFormatter.format(
              new Date(segment.arrivalTime.split("T")[0])
            )}
                        </div>
                      </div>
                    </div>
                  </div>
              `;
          })
          .join("");

        // Flight item markup
        return `
      <div class="flight-item px-2 px-md-4 py-3 border rounded-3 mb-3" data-token=${item.token}>
              ${flightDetails}
              <div class="flight-price text-start text-md-end">
                <p class="m-0 fs-2 fw-bold">£${item.priceBreakdown.total.units}</p>
              </div>
              <div
                class="flight-item-btns d-flex flex-wrap justify-content-between"
              >
                <button
                  class="save-btn px-5 py-2 rounded-3 focus-ring text-white fw-bold"
                >
                  <i class="fa-solid fa-heart"></i> Save
                </button>
                <button
                  class="view-details-btn px-5 py-2 rounded-3 focus-ring text-white fw-bold"
                >
                  View Details
                </button>
              </div>
      </div>
      `;
      })
      .join("");

    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  //   This method will return flight duration displayed as hours and minutes
  _calculateFlightHours(seconds) {
    let flightHoursString = "";

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    flightHoursString = `${hours.toFixed(0)}h ${
      minutes === 0 ? "" : minutes.toFixed(0) + "m"
    }`;

    return flightHoursString;
  }

  _extractHoursAndMinutes(timeString) {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes}`;
  }
}

export default new FlightsOffersView();
