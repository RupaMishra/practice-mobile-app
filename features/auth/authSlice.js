import { createSlice } from "@reduxjs/toolkit";
import { addTokenToLocalStorage } from "../../utils/localStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState = {
  token: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      const { idToken, loginOrSignup } = payload;
      state.token = idToken;
      state.isAuthenticated = !!idToken;
      if (loginOrSignup) addTokenToLocalStorage(idToken);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {},
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
