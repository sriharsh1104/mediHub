import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { addEmployInCompany } from "../Api/Actions/user.action";
import { useSelector } from "react-redux";
import { EmployManger } from "../../interface/ApiResponses/EmployManger";
// import { EmployeeResponse } from "../../interface/ApiResponses/EmployeeResponse";

const EmployMange = () => {
  const navigate = useNavigate();
  const organizationId = useSelector(
    (state: any) => state?.userDataSlice?.companyId
  );

  const employeeSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    designation: Yup.string().required("Required"),
    salary: Yup.string().required("Required"),
    empId: Yup.string().required("Required"),
    companyId: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      designation: "",
      salary: "",
      empId: 0,
      companyId: organizationId,
    },
    validationSchema: employeeSchema,
    onSubmit: async () => {},
  });
  const addEmployForOrganization = async () => {
    try {
      const result: EmployManger = await addEmployInCompany({

        name: formik.values.name.trim(),
        email: formik.values.email.trim(),
        designation : formik.values.designation.trim(),
        salary: formik.values.salary.trim(),
        empId: formik.values.empId,
        companyId: formik.values.companyId.trim,
      });
      if (result?.status === 200) {
        // Handle success, e.g., show a success message
        console.log("Employee added successfully");
      } else {
        // Handle error, e.g., show an error message
        console.error("Error adding employee");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <Formik
        initialValues={formik.initialValues}
        validationSchema={employeeSchema}
        onSubmit={addEmployForOrganization}
      >
        <Form>
          <div>
            <label htmlFor="name">First Name</label>
            <Field id="name" name="name" type="text" placeholder="Enter name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">Last Name</label>
            <Field
              id="email"
              name="email"
              type="text"
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="designation">Last Name</label>
            <Field
              id="designation"
              name="designation"
              type="text"
              placeholder="Enter designation"
            />
            <ErrorMessage name="designation" component="div" />
          </div>
          <div>
            <label htmlFor="salary">Last Name</label>
            <Field
              id="salary"
              name="salary"
              type="text"
              placeholder="Enter salary"
            />
            <ErrorMessage name="salary" component="div" />
          </div>
          <div>
            <label htmlFor="empId">Last Name</label>
            <Field
              id="empId"
              name="empId"
              type="text"
              placeholder="Enter empId"
            />
            <ErrorMessage name="empId" component="div" />
          </div>

          <div>
            <button onClick={addEmployForOrganization} type="submit">
              Add Employee
            </button>
            <div>
              <p>
                Do you want to go back?{" "}
                <Link to="/" className="text-blue-500 hover:underline">
                  Go back
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EmployMange;
