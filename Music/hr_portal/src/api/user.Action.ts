import { APIURL } from "@/constant";
import {
  apiCallPost,
} from "../services/axios.service";

export const signUp = async (data: any) => {
  try {
    let result: any = await apiCallPost(APIURL["SIGNUP"], data, {}, false, {});
    return result;
  } catch (error) {
    console.log("error signUp", error);
  }
};

export const login = async (data: any) => {
  try {
    let result: any = await apiCallPost(APIURL["LOGIN"], data, {}, false, {});
    return result;
  } catch (error) {
    console.log("error login", error);
  }
};
export const updateProfile = async (data: any) => {
  try {
    let result: any = await apiCallPost(APIURL["UPDATE_PROFILE"], data, {}, false, {});
    return result;
  } catch (error) {
    console.log("error login", error);
  }
};

