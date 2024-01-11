import { APIURL } from "../../../Constant";
import { apiCallPost } from "../../../Services/axios.service";
import toaster from "../../comman/Toast";

export const userLogin = async (data: any) => {
    const { emailAddress, password, dispatch } = data;
    try {
      let result: any = await apiCallPost(
        APIURL["USER_LOGIN"],
        {
          emailAddress: emailAddress,
          password: password,
          dispatch,
        },
        {},
        false,
        {}
      );
      if (result?.data?.twoFactorAuthenticationStatus === true) {
      } else if (result?.status === 200) {
        toaster.success(result?.message);
      } else if (result?.status === 400) {
        toaster.error(result?.message);
      } else if (result?.status === 500) {
        toaster.error(result?.message);
      }
      return result;
    } catch (error) {
      console.log("error userlogin", error);
    }
  };

export const userRegister= async (data: any) => {
  const { emailAddress, password, firstName,lastName,dispatch } = data;
  try {
    let result: any = await apiCallPost(
      APIURL["USER_REGISTER"],
      {
        emailAddress: emailAddress,
        password: password,
        firstName: firstName,
        lastName:lastName,
        dispatch,
      },
      {},
      false,
      {}
    );
    if (result?.data?.twoFactorAuthenticationStatus === true) {
    } else if (result?.status === 200) {
      toaster.success(result?.message);
    } else if (result?.status === 400) {
      toaster.error(result?.message);
    } else if (result?.status === 500) {
      toaster.error(result?.message);
    }
    return result;
  } catch (error) {
    console.log("error userlogin", error);
  }
};