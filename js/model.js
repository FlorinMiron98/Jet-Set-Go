// Import the 'options' object which contains the method and the API key
import { OPTIONS } from "./config.js";

export const state = {
  locationResults: {
    departureLocationResults: [],
    arrivalLocationResults: [],
  },
};

// Import the data of the departure and arrival locations
export const loadSearchDestinationsResults = async function (query, transit) {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${query}`;
  try {
    const response = await fetch(url, OPTIONS);

    if (!response.ok) {
      throw new Error("Something went wrong. Please try again!");
    }

    const data = await response.json();
    if (data.data.length === 0) {
      throw new Error("No results found for your query. Please try again!");
    }

    // Dynamically display the search list based on the transit (departure locations/arrival locations)
    if (transit === "departure") {
      state.locationResults.departureLocationResults = data.data;
    }
    if (transit === "arrival") {
      state.locationResults.arrivalLocationResults = data.data;
    }
  } catch (error) {
    throw error;
  }
};
