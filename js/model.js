import { OPTIONS } from "./config.js";

export const state = {
  locationResults: {
    departureLocationResults: [],
    arrivalLocationResults: [],
  },
};

export const loadSearchFlightsResults = async function (query, transit) {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${query}`;
  try {
    const response = await fetch(url, OPTIONS);

    if (!response.ok) {
      throw new Error("Something went wrong. Please try again!");
    }

    const data = await response.json();
    if (transit === "departure") {
      state.locationResults.departureLocationResults = data.data;
    }
    if (transit === "arrival") {
      state.locationResults.arrivalLocationResults = data.data;
    }
    console.log(state);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
