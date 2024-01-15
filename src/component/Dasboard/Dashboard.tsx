import React, { Dispatch } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import "./Dashboard.scss";
import CommanHeader from "../commanHeader/CommanHeader";
import { useDispatch, useSelector } from "react-redux";
import toaster from "../comman/Toast";
import { getAllEmployeesForAdmin } from "../Api/Actions/user.action";

const validationSchema = Yup.object().shape({});

const Dashboard: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const organizationId = useSelector(
    (state: any) => state.userDataSlice?.companyId
  );

  const formik = useFormik({
    initialValues: {
      companyId: organizationId, // Set companyId as the only initial value
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
    },
  });

  const handleRegister = async () => {
    try {
      const result: any = await getAllEmployeesForAdmin({
        companyId: formik.values.companyId,
      });
      console.log("first212", result);

      if (result?.status === 200) {
      } else {
        toaster.info("Registration Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-800 mx-auto mt-8">
      <form onSubmit={handleRegister}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CommanHeader />

          <div className="bg-white p-4 rounded-md shadow-md">
            <label
              htmlFor="companyId"
              className="block text-xl font-semibold mb-2"
            >
              Company ID
            </label>
            <input
              type="text"
              id="companyId"
              name="companyId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyId}
              className="w-full p-2 mb-2 border rounded-md"
            />
          </div>
        </div>

        <button
          onClick={handleRegister}
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded-md"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
