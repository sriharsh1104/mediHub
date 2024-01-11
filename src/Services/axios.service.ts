import axios from "axios";
// import toaster from "../Components/Common/Toast";
import { RESPONSES } from "../Utils";
import { formatUrl } from "../Services/comman.service";
import { API_HOST } from "../Constant";
import store from "../redux/store";
// import { resetUserDataSlice } from "../Redux/authenticationData/authenticationData";
import { resetAuthenticationDataSlice } from "../redux/userData/userData";
import { SERVER_UNREACHABLE } from "./AlertMessages/ErrorMessages";
import toaster from "../component/comman/Toast";
// import { resetLoaderDataSlice } from "../Redux/loader/loader";
// import { SERVER_UNREACHABLE } from "../Constants/AlertMessages/ErrorMessages";

axios.defaults.baseURL = API_HOST;

let isServerDown = false; // Flag to track server status

// axios request interceptor
axios.interceptors.request.use(
  (config: any) => {
    //   config.headers["api-access-token"] = token;
    return config;
  },
  (error: any) => {
    return error;
  }
);

// axios response interceptor
axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error?.response?.status === 401) {
      localStorage.clear();
      store.dispatch(resetAuthenticationDataSlice(""));
      window.location.replace("/");
    }
    console.log("error", error);
    if (!error.response) {
      // Server is down or no response received
      isServerDown = true; // Set the flag to true when server is down
      toaster.error(SERVER_UNREACHABLE); // This line displays a toaster message
    }
    return error.response;
  }
);

/**HANDLE AXIOS SUCCESS */
function handleSuccess(res:any) {
  if (!isServerDown) {
    if (
      res?.status === RESPONSES.SUCCESS ||
      res?.status === RESPONSES.CREATED
    ) {
      res?.data?.message && toaster.success(res?.data?.message);
    } else if (res?.data?.message === "Bad Request") {
      res?.data?.message && toaster.error("Invalid user");
    } else {
      res?.data?.message && toaster.info(res?.data?.message);
    }
  }
}

export const apiCallPost = (
  url:any,
  data:any,
  params = {},
  showtoaster:any,
  headers = {}
) =>
  new Promise((resolve) => {
    axios
      .post(formatUrl(url, params), data, {
        headers: headers,
      })
      .then((res) => {
        showtoaster && handleSuccess(res);
        resolve(res?.data);
      })
      .catch((error) => {
        resolve(null);
      });
  });

/**METHOD FOR SEND API */
export const apiCallGet = (
  url:any,
  data:any,
  params = {},
  showtoaster = false,
  headers = {}
) =>
  new Promise((resolve) => {
    axios
      .get(formatUrl(url, params), {
        headers: headers,
      })
      .then((res) => {
        showtoaster && handleSuccess(res);
        resolve(res?.data);
      })
      .catch((error) => {
        resolve(null);
      });
  });
