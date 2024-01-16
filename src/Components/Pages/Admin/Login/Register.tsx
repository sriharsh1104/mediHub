import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Dispatch} from "react";
import ButtonCustom from "../../../Common/Button/ButtonCustom";
import InputCustom from "../../../Common/Inputs/InputCustom";
import "./Login.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import oraora from "../../../../Assets/Images/oraora.png";
import CommonHeader from "../../../Common/CommonHeader/CommonHeader";
import { RegisterResponse } from "../../../../interface/ApiResponses/RegisterResponse";
import { userRegister } from "../../../../Redux/Actions/user.action";
import { setCompanyId } from "../../../../Redux/Slices/user.slice";
import { useDispatch } from "react-redux";
import toaster from "../../../Common/Toast";

const Register = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();


  const loginSchema = Yup.object().shape({
    address: Yup.string().required("*This Field is required"),
  });
  const formik = useFormik({
    initialValues: {
        email: "",
        firstName: "",
        lastName: "",
        companyName: "",
        numberOfEmployees: "",
        password: "",
        confirmPassword: "",
      },
    validationSchema: loginSchema,
    onSubmit: async (values) => {},
  });
  const handleRegister = async () => {
    try {
      const result: RegisterResponse = await userRegister({
        emailAddress: formik.values.email.trim(),
        firstName: formik.values.firstName.trim(),
        lastName: formik.values.lastName.trim(),
        companyName: formik.values.companyName.trim(),
        numberOfEmployees: formik.values.numberOfEmployees.trim(),
        password: formik.values.password.trim(),
        confirmPassword: formik.values.confirmPassword.trim(),

      });
      console.log("3213131", result);

      if (result?.status === 200) {
        dispatch(setCompanyId(result?.data?.companyId));

        navigate("/");
      } else {
        toaster.info("Registration Failed");
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
            <Col lg={6}>
              <div className="login_page_img">
                <img src={oraora} height={550}  alt="login_bg" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="login_page_box">
                {/* <CommonHeading heading="Login" /> */}
                <h4>Register</h4>
                <p>Fill the below details to Login account</p>
                <form onSubmit={formik.handleSubmit}>
                  <InputCustom
                    label="Email Address"
                    placeholder="EmailAddress"
                    id="address"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    autoFocus={true}
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
                    label="First Name"
                    placeholder="First Name"
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    autoFocus={true}
                    value={formik.values.firstName}
                    isInvalid={
                      formik.touched.firstName && !!formik.errors.firstName
                    }
                    error={
                      formik.errors.firstName && formik.touched.firstName ? (
                        <span className="error-message">
                          {formik.errors.firstName}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="LastName"
                    placeholder="Last Name"
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    autoFocus={true}
                    value={formik.values.lastName}
                    isInvalid={
                      formik.touched.lastName && !!formik.errors.lastName
                    }
                    error={
                      formik.errors.lastName && formik.touched.lastName ? (
                        <span className="error-message">
                          {formik.errors.lastName}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="Company Name"
                    placeholder="Company Name"
                    id="companyName"
                    name="companyName"
                    type="text"
                    onChange={formik.handleChange}
                    autoFocus={true}
                    value={formik.values.companyName}
                    isInvalid={
                      formik.touched.companyName && !!formik.errors.companyName
                    }
                    error={
                      formik.errors.companyName && formik.touched.companyName ? (
                        <span className="error-message">
                          {formik.errors.companyName}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="NO. OF EMPLOYEES "
                    placeholder="Number Of Employees"
                    id="numberOfEmployees"
                    name="numberOfEmployees"
                    type="text"
                    onChange={formik.handleChange}
                    autoFocus={true}
                    value={formik.values.numberOfEmployees}
                    isInvalid={
                      formik.touched.numberOfEmployees && !!formik.errors.numberOfEmployees
                    }
                    error={
                      formik.errors.numberOfEmployees && formik.touched.numberOfEmployees ? (
                        <span className="error-message">
                          {formik.errors.numberOfEmployees}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="Password"
                    placeholder="Password"
                    id="address"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    autoFocus={true}
                    value={formik.values.password}
                    isInvalid={
                      formik.touched.password && !!formik.errors.password
                    }
                    error={
                      formik.errors.password && formik.touched.password ? (
                        <span className="error-message">
                          {formik.errors.password}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="Confirm Password"
                    placeholder="confirm password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    autoFocus={true}
                    value={formik.values.confirmPassword}
                    isInvalid={
                      formik.touched.confirmPassword &&
                      !!formik.errors.confirmPassword
                    }
                    error={
                      formik.errors.confirmPassword &&
                      formik.touched.confirmPassword ? (
                        <span className="error-message">
                          {formik.errors.confirmPassword}
                        </span>
                      ) : null
                    }
                  />
                  <Form.Group className="mt-4">
                    <Form.Check
                      className="form-check"
                      type="checkbox"
                      label="By clicking  on register button you agree to our term & condition and Privacy Policy"
                    />
                  </Form.Group>
                  <div className="login_page_box_btn mt-4">
                    <ButtonCustom
                      type="button"
                      title="Register"
                      fluid
                      onClick={handleRegister}
                    />
                    <p className="text-center mt-2 text-dark">
                      Already have an account? click here to{" "}
                      <Link to="/">
                        <span>login</span>
                      </Link>
                    </p>
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

export default Register;
