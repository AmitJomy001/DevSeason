import { createSlice } from "@reduxjs/toolkit";

interface stateType {
    user: string | null;
    isAuthenticated: boolean;
}

const yourSlice = createSlice({
  name: "yourSliceIsType",
  initialState: {user: null, isAuthenticated: false},
  reducers: {
    login: (state: stateType, action: { payload: string | null}) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state: stateType) => {
        state.user = null;
        state.isAuthenticated = false;
    }
  },
});

export default yourSlice.reducer;
