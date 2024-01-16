import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Dispatch } from "react";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import ButtonCustom from "../../../Common/Button/ButtonCustom";
import InputCustom from "../../../Common/Inputs/InputCustom";
import "./Login.scss";
import { Col, Container, Row } from "react-bootstrap";
import oraora from "../../../../Assets/Images/oraora.png";
import CommonHeader from "../../../Common/CommonHeader/CommonHeader";
import { userLogin } from "../../../../Redux/Actions/user.action";
import { setCompanyId, setJwtToken } from "../../../../Redux/Slices/user.slice";
import { useDispatch } from "react-redux";
import { LoginResponse } from "../../../../interface/ApiResponses/LoginResponse";
import toaster from "../../../Common/Toast";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Input A Valid Email.")
      .required("*This Field Is Required.")
      .max(300, "Maximum 300 Characters Are Allowed For Email.")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email"
      ),
    password: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {},
  });
  const handleLogin = async () => {
    try {
      const result: LoginResponse = await userLogin({
        emailAddress: formik.values.email.trim(),
        password: formik.values.password.trim(),
      });

      if (result?.status === 200) {
        dispatch(setCompanyId(result?.data?.companyId));
        dispatch(setJwtToken(result?.data?.accessToken));
        const decodedToken = jwt.decode(result?.data?.accessToken);
        if (
          decodedToken &&
          typeof decodedToken === "object" &&
          "role" in decodedToken
        ) {
          const loginToken = decodedToken as JwtPayload;

          // Check if the role is admin
          if (loginToken.role === "Admin") {
            navigate("/auth/dashboard");
          } else {
            navigate("/auth/dashboardEmploy");
          }
        }
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
                  <InputCustom
                    label="Phone Number Or Email"
                    placeholder="admin123@gmail.com"
                    id="email"
                    name="email"
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
                  <Link to="/otp" className="frgt-pswrd text-end ms-auto">
                    Forgot Password?
                  </Link>
                  <div className="login_page_box_btn mt-4">
                    <ButtonCustom
                      type="button"
                      title="Login"
                      fluid
                      onClick={handleLogin}
                    />
                    <p className="mt-2 text-end">
                      Don't have an account?{" "}
                      <span>
                        <Link to="/register">Sign up</Link>
                      </span>
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

export default AdminLogin;
