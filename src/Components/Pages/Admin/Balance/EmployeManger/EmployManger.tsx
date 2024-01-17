import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Dispatch } from "react";
import ButtonCustom from "../../../../Common/Button/ButtonCustom";
import InputCustom from "../../../../Common/Inputs/InputCustom";
import "../EmployeManger/Balance.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommonHeader from "../../../../Common/CommonHeader/CommonHeader";
import { addEmployInCompany } from "../../../../../Redux/Actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { EmployManger } from "../../../../../interface/ApiResponses/EmployManger";

const EmployMange = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const organizationId = useSelector(
    (state: any) => state?.userDataSlice?.companyId
  );

  const employeeSchema = Yup.object().shape({
    name: Yup.string().required("*This Field Is Required."),
    email: Yup.string()
      .email("Input A Valid Email.")
      .required("*This Field Is Required.")
      .max(300, "Maximum 300 Characters Are Allowed For Email.")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email"
      ),
    designation: Yup.string().required("*This Field Is Required."),
    salary: Yup.string()
      .matches(/^[0-9]+$/, "Only numerical values are allowed for Salary.")
      .required("*This Field Is Required."),
    empId: Yup.number().required("*This Field Is Required."),
    DateOfJoining: Yup.string().required("*This Field Is Required."),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      designation: "",
      salary: "",
      empId: 0,
      DateOfJoining: "",
    },
    validationSchema: employeeSchema,
    onSubmit: async (values) => {},
  });
  const addEmployForOrganization = async () => {
    try {
      const result: EmployManger = await addEmployInCompany({
        name: formik.values.name.trim(),
        email: formik.values.email.trim(),
        designation: formik.values.designation.trim(),
        salary: formik.values.salary.trim(),
        empId: formik.values.empId,
        DateOfJoining: formik.values.DateOfJoining.trim(),
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
    <>
      <section className="login_page">
        <Container>
          <CommonHeader />
          <Row className="align-items-center">
            <Col lg={6}></Col>
            <Col lg={6}>
              <div className="login_page_box">
                <form onSubmit={formik.handleSubmit}>
                  <InputCustom
                    label="Full Name"
                    placeholder=" Full Name"
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    isInvalid={formik.touched.name && !!formik.errors.name}
                    error={
                      formik.errors.name && formik.touched.name ? (
                        <span className="error-message">
                          {formik.errors.name}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="Email Address"
                    placeholder="EmailAddress"
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    isInvalid={formik.touched.email && !!formik.errors.email}
                    error={
                      formik.errors.email && formik.touched.email ? (
                        <span className="error-message">
                          {formik.errors.email}
                        </span>
                      ) : null
                    }
                  />

                  <InputCustom
                    label="Designation"
                    placeholder="Designation"
                    id="designation"
                    name="designation"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.designation}
                    isInvalid={
                      formik.touched.designation && !!formik.errors.designation
                    }
                    error={
                      formik.errors.designation &&
                      formik.touched.designation ? (
                        <span className="error-message">
                          {formik.errors.designation}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="Salary"
                    placeholder="Salary Of Employee"
                    id="salary"
                    name="salary"
                    type="text"
                    onChange={(e: any) => {
                      e.preventDefault();
                      const { value } = e.target;
                      const regex = /^(\d+)?$/;
                      if (regex.test(value.toString())) {
                        formik.handleChange(e);
                      }
                    }}
                    value={formik.values.salary}
                    isInvalid={formik.touched.salary && !!formik.errors.salary}
                    error={
                      formik.errors.salary && formik.touched.salary ? (
                        <span className="error-message">
                          {formik.errors.salary}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="Employ Id "
                    placeholder="Employee Id"
                    id="empId"
                    name="empId"
                    type="text"
                    onChange={(e: any) => {
                      e.preventDefault();
                      const { value } = e.target;
                      const regex = /^(\d+)?$/;
                      if (regex.test(value.toString())) {
                        formik.handleChange(e);
                      }
                    }}
                    value={formik.values.empId}
                    isInvalid={formik.touched.empId && !!formik.errors.empId}
                    error={
                      formik.errors.empId && formik.touched.empId ? (
                        <span className="error-message">
                          {formik.errors.empId}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="Date Of Joining"
                    placeholder="Date Of Joining"
                    id="address"
                    name="DateOfJoining"
                    type="DateOfJoining"
                    onChange={formik.handleChange}
                    value={formik.values.DateOfJoining}
                    isInvalid={
                      formik.touched.DateOfJoining &&
                      !!formik.errors.DateOfJoining
                    }
                    error={
                      formik.errors.DateOfJoining &&
                      formik.touched.DateOfJoining ? (
                        <span className="error-message">
                          {formik.errors.DateOfJoining}
                        </span>
                      ) : null
                    }
                  />
                  <div className="login_page_box_btn mt-4">
                    <ButtonCustom
                      type="button"
                      title="Add Member"
                      fluid
                      onClick={addEmployForOrganization}
                    />
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EmployMange;
