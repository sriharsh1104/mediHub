import { APIURL } from "../../../Constant";
import { apiCallPost } from "../../../Services/axios.service";
import toaster from "../../comman/Toast";

export const userLogin = async (data: any) => {
    const { emailAddress, password } = data;
    try {
      let result: any = await apiCallPost(
        APIURL["USER_LOGIN"],
        {
          email: emailAddress,
          password: password,
        },
        {},
        false,
        {}
      );
      if (result?.status === 200) {
        return result;
      }
    } catch (error) {
      console.error(error);
    }
  };

  export const userRegister = async (data: any) => {
    const {
      emailAddress,
      firstName,
      lastName,
      password,
    } = data;
    try {
      let result: any = await apiCallPost(

        APIURL["USER_REGISTER"],
        {
          email: emailAddress,
          firstName: firstName,
          lastName: lastName,
          password: password,
        },
        {},
        true,
        {}
      );
  
      if (result?.status === 200) {
        return result;
      }
    } catch (error) {
      console.error(error);
    }
  };
  