import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: {
  adminData: [];
  contacts: [];
  loading: boolean;
  error: string | null;
} = {
  adminData: [],
  contacts: [],
  loading: false,
  error: null,
};

// Login Admin Async Thunk
export const loginAdmin: any = createAsyncThunk(
  "admin/loginAdmin",
  async (adminData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/admin/login", adminData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
)

// Get All Contacts Async Thunk
export const getAllContacts: any = createAsyncThunk(
  "getAllContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/admin/contact-messages");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
)

// Logout Admin Async Thunk
export const logoutAdmin: any = createAsyncThunk(
  "logoutAdmin",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/admin/logout");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
)

// Admin Slice
export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminData: (state, action) => {
      state.adminData = action.payload;
    },
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login Admin Async Thunk
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.adminData = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user data";
      })
      // Get All Contacts Async Thunk
      .addCase(getAllContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(getAllContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user data";
      })
      // Logout Admin Async Thunk
      .addCase(logoutAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.loading = false;
        state.adminData = [];
        state.contacts = [];
      })
      .addCase(logoutAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user data";
      })
  }
});

export const { setAdminData, setContacts } = adminSlice.actions;
export default adminSlice.reducer;
