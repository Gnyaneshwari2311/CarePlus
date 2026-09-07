import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice.js";

const store = configureStore({
  reducer: {
    bookings: bookingReducer,
  },
});

export default store;