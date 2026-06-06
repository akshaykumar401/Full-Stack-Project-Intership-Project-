import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState: {
  contactData: {};
  loading: boolean;
  error: string | null;
} = {
  contactData: {},
  loading: false,
  error: null,
};

// contactUs async thunk
export const contactUs: any = createAsyncThunk("contactUs", async (userData: any, { rejectWithValue }) => {
  try {
    const response = await axios.post(`/api/contact/contact`, userData);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

// Contact Slice
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(contactUs.fulfilled, (state, action) => {
        state.loading = false;
        state.contactData = action.payload;
      })
      .addCase(contactUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
})

export default contactSlice.reducer;