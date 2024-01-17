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
  },
  dashboardTab:"",
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
    setDashboardTab: (state, action) => {
      state.dashboardTab = action.payload;
    },
    
  },
});

export const {
  resetAuthenticationDataSlice,
  setCompanyData,
  setDashboardTab
 
} = userDataSlice.actions;
export default userDataSlice.reducer;
