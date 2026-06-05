import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contact/contact.slice.ts";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  }
})