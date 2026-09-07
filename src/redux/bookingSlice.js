import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "bookings",

  initialState: {
    list: [],
  },

  reducers: {
    addBooking: (state, action) => {
      state.list.push(action.payload);
    },

    deleteBooking: (state, action) => {
      state.list = state.list.filter(
        (booking) => booking.id !== action.payload
      );
    },
  },
});

export const {
  addBooking,
  deleteBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;