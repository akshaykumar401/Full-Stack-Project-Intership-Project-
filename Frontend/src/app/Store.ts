import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contact/contact.slice.ts";
import adminReducer from "../features/admin/admin.slice.ts";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    admin: adminReducer,
  }
})