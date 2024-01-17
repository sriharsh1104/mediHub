import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../interface/userData";

// InitialState for userData
const initialState: UserData = {
  companyData:{
    firstName: "",
    lastName: "",
    emailAddress: "",
    companyId: "",
    jwtToken: "",
    gitHub: "",
    linkedIn: "",
    telegram: "",
    instagram: "",
    address: "",
    bio: "",
    contact_Number: 0,
    country: "",
    pincode: 0,
    companyName: "",
  }
};

// UserData SLICE
export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    resetAuthenticationDataSlice: (state, action) => {
      state.companyData = initialState.companyData;
      
    },
    setCompanyData: (state, action) => {
      state.companyData = action.payload;
    },
    
  },
});

export const {
  resetAuthenticationDataSlice,
  setCompanyData
 
} = userDataSlice.actions;
export default userDataSlice.reducer;
