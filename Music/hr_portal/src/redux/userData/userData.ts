import { createSlice } from "@reduxjs/toolkit";
// import { UserData } from "../../Constants/Types/User/userDataType/userDataType";

// Initial state for user data
const initialState: any = {
  firstName: "",
};

// User Data Slice
export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    resetUserDataSlice: () => initialState,
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
  },
});

export const { resetUserDataSlice, setFirstName } = userDataSlice.actions;

export default userDataSlice.reducer;
