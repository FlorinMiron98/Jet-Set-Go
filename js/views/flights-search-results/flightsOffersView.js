class FlightsOffersView {
  // DOM Elements
  _parentEl = document.querySelector(".flights-search-results");

  // Global variables
  _errorMessage = "No flight offers matching your request. Please try again!";

  _renderSpinner() {
    const markup = `
        <div class="loader-container d-flex flex-column align-items-center justify-content-center mt-4">
              <div class="loader"></div>
              <p class="mt-2">Searching for flights offers...</p>
        </div>
    `;
    this._clearMarkup();
    this._parentEl.insertAdjacentElement("afterbegin", markup);
  }

  _clearMarkup() {
    this._parentEl.innerHTML = "";
  }
}
