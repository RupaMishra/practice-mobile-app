import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customFetch } from "../../utils/axios";
import { ApiEndPoints } from "../../network/ApiEndpoints";
const initialState = {
  token: "",
  isAuthenticated: true,
  isLoading: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.post(ApiEndPoints.LOGIN, data);
      console.log("res", res.data);

      return res.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const verifyTpin = createAsyncThunk(
  "auth/verify",
  async (data, thunkAPI) => {
    const { apiEnd, payload } = data;
    try {
      const res = await customFetch.post(apiEnd, payload);
      console.log("res", res.data);

      return res.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      // const { idToken } = payload;
      // state.token = idToken;
      // state.isAuthenticated = !!idToken;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { idToken } = payload;
        state.token = idToken;
        state.isAuthenticated = !!idToken;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(verifyTpin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyTpin.fulfilled, (state, { payload }) => {
        const { idToken } = payload;
        state.token = idToken;
        state.isAuthenticated = !!idToken;
        state.isLoading = false;
      })
      .addCase(verifyTpin.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
