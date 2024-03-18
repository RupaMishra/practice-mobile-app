import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/axios";
import { ApiEndPoints } from "../../network/ApiEndpoints";
const initialState = {
  isLoading: false,
};

export const loginUser = createAsyncThunk("auth/login", async (data) => {
  try {
    const res = await customFetch.post(ApiEndPoints.LOGIN, data);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
});

export const verifyTpin = createAsyncThunk("auth/verify", async (data) => {
  const { apiEnd, payload } = data;
  try {
    const res = await customFetch.post(apiEnd, payload);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
});

const authNonPersistSlice = createSlice({
  name: "authNonPersistSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(verifyTpin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyTpin.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(verifyTpin.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { authenticate, logout } = authNonPersistSlice.actions;
export default authNonPersistSlice.reducer;
