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
    numberOfEmployees,
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
        noOfEmployees: numberOfEmployees,
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
  const { name, email, designation, salary, empId, companyId, DateOfJoining,reportingManger } =
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
        reportingManger:reportingManger,
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
export const getAllEmployeesForAdmin = async (
  data: any,
  page: number,
  limit: number
) => {
  const queryParams = `?limit=${limit}&page=${page}`;

  try {
    let result: any = await apiCallPost(
      APIURL["ALL_EMPLOYEES"] + queryParams,
      {
        companyId: data,
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
  const {
    gitHub,
    linkedIn,
    telegram,
    instagram,
    address,
    bio,
    Contact_Number,
    country,
    pincode,
    companyId,
  } = data;
  try {
    let result: any = await apiCallPost(
      APIURL["UPDATE_ADMIN"],
      {
        companyId: companyId,
        gitHub: gitHub,
        linkedIn: linkedIn,
        telegram: telegram,
        instagram: instagram,
        address: address,
        bio: bio,
        phoneNo: Contact_Number,
        country: country,
        pincode: pincode,
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
export const updateEmplpoyInfo = async (data: any) => {
  const {
    name,
    email,
    designation,
    salary,
    DateOfJoining,
    empId,
    companyId,
    deleteEmployee,
  } = data;
  try {
    let result: any = await apiCallPost(
      APIURL["UPDATE_EMPLOYDATA"],
      {
        name: name,
        email: email,
        designation: designation,
        salary: salary,
        empId: empId,
        companyId: companyId,
        doj: DateOfJoining,
        deleteEmployee: deleteEmployee,
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
export const setUpLoginForUser = async (data: any) => {
  const { token, password,uniqueId } = data;
  try {
    let result: any = await apiCallPost(
      APIURL["SETUPUSERPASSWORD"],
      {
        password: password,
        token:token,
        uniqueId:uniqueId
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
export const reportingData = async (data: any) => {
  const { companyId,positionName } = data;
  try {
    let result: any = await apiCallPost(
      APIURL["REPORTING_DATA"],
      {
        companyId: companyId,
        positionName:positionName,
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

export const fetchRole = async (data: any) => {
  
  const { companyId } = data;
  console.log('result123', data)
  try {
    let result: any = await apiCallPost(
      APIURL["FETCH_ROLE"],
      {
        companyId: companyId,
      },
      {},
      false,
      {}
    );
    if (result?.status === 200) {
      console.log('result123', result)
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};
export const addRole = async (data: any) => {
  
  const { companyId,positionName,reportingTo,reportingToId } = data;
  console.log('result123', data)
  try {
    let result: any = await apiCallPost(
      APIURL["ADD_ROLES"],
      {
        companyId: companyId,
        positionName:positionName,
        reportingTo:reportingTo,
        reportingToId:reportingToId,
      },
      {},
      false,
      {}
    );
    if (result?.status === 200) {
      console.log('result123', result)
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};