import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { addEmployInCompany } from "../Api/Actions/user.action";
import { useSelector } from "react-redux";
import { EmployManger } from "../../interface/ApiResponses/EmployManger";
import "./AddEmployee.scss";

const EmployMange = () => {
  const navigate = useNavigate();
  const organizationId = useSelector(
    (state: any) => state?.userDataSlice?.companyId
  );
  console.log('1231', organizationId)

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
    },
    validationSchema: employeeSchema,
    onSubmit: async () => {},
  });
  const addEmployForOrganization = async () => {
    try {
      const result: EmployManger = await addEmployInCompany({
        name: formik.values.name.trim(),
        email: formik.values.email.trim(),
        designation: formik.values.designation.trim(),
        salary: formik.values.salary.trim(),
        empId: formik.values.empId,
        companyId: organizationId,
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
      <Formik
        initialValues={formik.initialValues}
        validationSchema={employeeSchema}
        onSubmit={addEmployForOrganization}
      >
        <Form>
        <div>
            <label htmlFor="name"> Name </label>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email"> Email</label>
            <Field
              id="email"
              name="email"
              type="text"
              placeholder="Enter Your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="designation">Designation</label>
            <Field
              id="designation"
              name="designation"
              type="text"
              placeholder="Enter designation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.designation}
            />
            <ErrorMessage name="designation" component="div" />
          </div>
          <div>
            <label htmlFor="salary"> Salary</label>
            <Field
              id="salary"
              name="salary"
              type="text"
              placeholder="Enter salary"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.salary}
            />
            <ErrorMessage name="salary" component="div" />
          </div>
          <div>
            <label htmlFor="empId"> Emp-Id</label>
            <Field
              id="empId"
              name="empId"
              type="text"
              placeholder="Enter empId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.empId}
            />
            <ErrorMessage name="empId" component="div" />
          </div>

          <div>
            <button onClick={addEmployForOrganization} type="submit">
              Add Employee
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EmployMange;
