import axios from "axios";
import { RESPONSES } from "../Utils";
import { formatUrl } from "../Services/common.service";
import { API_HOST } from "../Constant";
import store from "../Redux/Store";
import { resetAuthenticationDataSlice } from "../Redux/Slices/user.slice";
import { SERVER_UNREACHABLE } from "../AlertMessages/ErrorMessages";
import toaster from "../Components/Common/Toast";

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
