import { apiCallPost } from "../../Services/axios.service";
import { APIURL } from "../../Constant";

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
    companyName,
    noOfEmployees,
    password,
  } = data;
  try {
    let result: any = await apiCallPost(
      APIURL["USER_REGISTER"],
      {
        email: emailAddress,
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        noOfEmployees: noOfEmployees,
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
export const addEmployInCompany = async (data: any) => {
  const { name, email, designation, salary, empId, companyId, DateOfJoining } =
    data;
  console.log("firssadakjndskjat", data);
  try {
    let result: any = await apiCallPost(
      APIURL["ADD_EMPLOY"],
      {
        name: name,
        email: email,
        designation: designation,
        salary: salary,
        empId: empId,
        companyId: companyId,
        doj: DateOfJoining,
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
  const { companyId } = data;
  try {
    let result: any = await apiCallPost(
      APIURL["ALL_EMPLOYEES"],
      {
        companyId: companyId,
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
export const updateSettingForAdmin = async (data: any) => {
  const { gitHub,linkedIn,telegram,instagram,address,bio,Contact_Number,Country,Pincode ,companyId} = data;
  try {
    let result: any = await apiCallPost(
      APIURL["UPDATE_ADMIN"],
      {
        companyId:companyId,
        gitHub: gitHub,
        linkedIn:linkedIn,
        telegram:telegram,
        instagram:instagram,
        address:address,
        bio:bio,
        phoneNo:Contact_Number,
        country:Country,
        pincode:Pincode

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
