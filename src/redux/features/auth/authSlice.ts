import { createSlice } from "@reduxjs/toolkit";

type TAuth = {
  user: null | object;
};

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
});
