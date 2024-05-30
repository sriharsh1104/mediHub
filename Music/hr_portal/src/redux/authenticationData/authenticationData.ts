import { createSlice } from "@reduxjs/toolkit";
// import { AuthenticaionData } from "../../Constants/Types/User/authenticationDataType/authenticationDataType";

// Initial state for user data
const initialState: any = {
  jwtToken: "",
  refreshToken:"",
  profileData:"",
};

// User Data Slice
export const authenticationDataSlice = createSlice({
  name: "authenticationData",
  initialState,
  reducers: {
    resetAuthenticationDataSlice: () => initialState,
  
    setJwtToken: (state, action) => {
      state.jwtToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setProfileData: (state, action) => {
      state.profileData = action.payload;
    },
  },
});

export const { resetAuthenticationDataSlice, setJwtToken,setRefreshToken ,setProfileData} =
  authenticationDataSlice.actions;

export default authenticationDataSlice.reducer;