class FlightResultsView {
  // Global Variables
  _pageNumber = 1;

  _addHandlerLoad(handler) {
    window.addEventListener("load", () => {
      handler();
    });
  }

  _getQueryParameters() {
    const link = window.location.search;
    const searchParams = new URLSearchParams(link);

    return {
      adults: searchParams.get("adults"),
      children: [searchParams.get("children")],
      flightClass: searchParams.get("flightClass"),
      departureLocationId: searchParams.get("departureLocationId"),
      arrivalLocationId: searchParams.get("arrivalLocationId"),
    };
  }
}

export default new FlightResultsView();
