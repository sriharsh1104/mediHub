import { useFormik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Dispatch } from "react";
import ButtonCustom from "../../../Common/Button/ButtonCustom";
import "./LoginSetUp.scss";
import { Col, Container, Row } from "react-bootstrap";
import oraora from "../../../../Assets/Images/oraora.png";
import CommonHeader from "../../../Common/CommonHeader/CommonHeader";
import { setUpLoginForUser } from "../../../../Redux/Actions/user.action";
import { useDispatch } from "react-redux";
import { LoginResponse } from "../../../../interface/ApiResponses/LoginResponse";
import toaster from "../../../Common/Toast";
import Password from "../../../Common/FormInputs/Password";
import { setCompanyData } from "../../../../Redux/Slices/user.slice";

const LoginSetUp = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const location = useLocation();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Input A Valid Email.")
      .required("*This Field Is Required.")
      .max(300, "Maximum 300 Characters Are Allowed For Email.")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Emasettingil"
      ),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {},
  });
  const token = location?.search?.split("?")[1]?.split("&")[0]?.split("=")[1];
  const id = location?.search?.split("?")[1]?.split("&")[1]?.split("=")[1];
  console.log("id,token", id, token);
  const handleLoginForUser = async (e: any) => {
    e.preventDefault();
    try {
      const result: any = await setUpLoginForUser({
        token: token,
        uniqueId: id,
        password: formik.values.password.trim(),
      });
      console.log("result", result);
      if (result?.status === 200) {
        navigate("/")

      } else {
        toaster.info("Login failed");
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
          <Row>
            <Col md={12} lg={6}>
              <div className="login_page_img">
                <img src={oraora} height={550} alt="login_bg" />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="login_page_box">
                {/* <CommonHeading heading="Login" /> */}
                <h4>Login</h4>
                <p>Fill the below details to Login account</p>
                <form onSubmit={formik.handleSubmit}>
                  <Password
                    label="Password"
                    placeholder="Password"
                    id="password"
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
                  <Password
                    label="Confirm Password"
                    placeholder="confirm password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
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
                  <Link to="/otp" className="frgt-pswrd text-end ms-auto">
                    Forgot Password?
                  </Link>
                  <div className="login_page_box_btn mt-4">
                    <ButtonCustom
                      type="button"
                      title="Login"
                      fluid
                      onClick={(e: any) => handleLoginForUser(e)}
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

export default LoginSetUp;
