import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../interface/userData";

// InitialState for userData
const initialState: UserData = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  companyId:"",
  jwtToken:"",
};

// UserData SLICE
export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    resetAuthenticationDataSlice: (state, action) => {
      state.firstName = "";
      state.lastName = "";
      state.emailAddress = "";
      state.companyId ="";
      state.jwtToken="";
      
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setlastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmailAddress: (state, action) => {
      state.emailAddress = action.payload;
    },
    setCompanyId: (state, action) => {
      state.companyId = action.payload;
    },
    setJwtToken: (state, action) => {
      state.jwtToken = action.payload;
    },

  },
});

export const {
  resetAuthenticationDataSlice,
  setFirstName,
  setlastName,
  setEmailAddress,
  setCompanyId,
  setJwtToken,

} = userDataSlice.actions;
export default userDataSlice.reducer;
