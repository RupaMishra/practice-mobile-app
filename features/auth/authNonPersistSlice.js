import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { customFetch } from "../../utils/axios";
import { ApiEndPoints } from "../../network/ApiEndpoints";
import { logout, setUser } from "./authSlice";
import { customFetch } from "../../utils/axios";
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

export const logoutApi = createAsyncThunk("/logout", async (_, thunkAPI) => {
  thunkAPI.dispatch(logout());
  try {
    await customFetch.post(ApiEndPoints.LOGOUT);
  } catch (error) {
    console.log("error", error);
  }
});

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    const res = await customFetch.get(ApiEndPoints.GET_USER);
    console.log("user", res.data);
    const data = res?.data?.data;
    thunkAPI.dispatch(setUser(data));
    // return res.data;
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
      })
      .addCase(logoutApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutApi.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutApi.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { authenticate } = authNonPersistSlice.actions;
export default authNonPersistSlice.reducer;
