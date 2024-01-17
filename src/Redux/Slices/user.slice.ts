import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../interface/userData";

// InitialState for userData
const initialState: UserData = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  companyId:"",
  jwtToken:"",
  gitHub:"",
  linkedIn:"",
  telegram:"",
  instagram:"",
  address:"",
  bio:"",
  contact_Number:0,
  country:"",
  pincode:0,

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
      state.gitHub="";
      state.linkedIn="";
      state.telegram="";
      state.instagram="";
      state.address="";
      state.bio="";
      state.contact_Number=0;
      state.country="";
      state.pincode=0;

      
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
    setGitHub: (state, action) => {
      state.gitHub = action.payload;
    },
    setLinkedIn: (state, action) => {
      state.linkedIn = action.payload;
    },
    setTelegram: (state, action) => {
      state.telegram = action.payload;
    },
    setInstagram: (state, action) => {
      state.instagram = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setBio: (state, action) => {
      state.bio = action.payload;
    },
    setContact_Number: (state, action) => {
      state.contact_Number = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setPincode: (state, action) => {
      state.pincode = action.payload;
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
  setGitHub,
  setLinkedIn,
  setTelegram,
  setInstagram,
  setAddress,
  setBio,
  setContact_Number,
  setCountry,
  setPincode

} = userDataSlice.actions;
export default userDataSlice.reducer;
