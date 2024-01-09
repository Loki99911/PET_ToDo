import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./userOperations";
import { StateUser } from "../../types/IUserRedux";

const pending = (state: StateUser) => {
  state.isLoading = true;
};

const initialState: StateUser = {
  user: null,
  isLogin: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(createUser.pending, pending)
      .addCase(
        createUser.rejected,
        () => {}
        // (state: StateCharacters, { payload }) => {
        //   state.isLoading = false;
        //   state.error = payload!.message;
        // }
      )
      .addCase(
        createUser.fulfilled,
        () => {}
        // (state, { payload }) => {
        // state.isLoading = false;
        // state.error = null;
        // state.characters = payload;}
      ),
});

export default userSlice.reducer;
