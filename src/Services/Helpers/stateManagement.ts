import store from "../../redux/store";
import packageJson from "../../../package.json";
import { resetAuthenticationDataSlice } from "../../redux/userData/userData";
// import { UserData } from "../../interface/userData";

const resetRedux = () => {
  store.dispatch(resetAuthenticationDataSlice(""));
};

export const versionManager = async () => {
  try {
    const version = packageJson.version;
    const react_version = localStorage.getItem("react_version");
    if (react_version && version !== react_version) {
      resetRedux();
      localStorage.clear();
    }
    if (!react_version) {
      resetRedux();
      localStorage.clear();
    }
    localStorage.setItem("react_version", version);
  } catch (error) {
    console.log("Error in versionManager =>", error);
  }
};
//handle logout
export const handleLogout = async (navigate: any) => {
  localStorage.clear();
  await versionManager();
  navigate("/");
};
