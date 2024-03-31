import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  token: "",
  isAuthenticated: false,
  user: {},
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      const { api_token } = payload;
      state.token = api_token;
      state.isAuthenticated = !!api_token;
      state.user = payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = {};
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("user");
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { authenticate, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
