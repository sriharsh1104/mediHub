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
      firstName,
      lastName,
      emailAddress,
      password,
      companyName,
      noOfEmployees

    } = data;
    try {
      let result: any = await apiCallPost(

        APIURL["USER_REGISTER"],
        {
          email: emailAddress,
          firstName: firstName,
          lastName: lastName,
          password: password,
          companyName:companyName,
          noOfEmployees:noOfEmployees,

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
  export const addEmployInCompany = async (data: any) => {
    const {
        name,
        email,
        designation,
        salary,
        empId,
        companyId,
    } = data;
    try {
      let result: any = await apiCallPost(

        APIURL["ADD_EMPLOY"],
        {
          name: name,
          email: email,
          designation: designation,
          salary: salary,
          empId:empId,
          companyId:companyId,

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
  export const getAllEmployeesForAdmin = async (data: any) => {
    const {
        companyId,
    } = data;
    try {
      let result: any = await apiCallPost(

        APIURL["ALL_EMPLOYEES"],
        {
          companyId:companyId,
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
  