import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css"; // Import the generated Tailwind CSS file
import { userRegister } from "../Api/Actions/user.action";
import { RegisterResponse } from "../../interface/ApiResponses/RegisterResponse";
import dawai2 from "../../Assests/dawai3.webp";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const registerSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email")
      .max(300, "Maximum 300 Characters Are Allowed For Email.")
      .matches(
        /^(.+)@(gmail\.com|yahoo\.com|hotmail\.com)$/,
        "Please enter a valid email address with @gmail.com, @yahoo.com, or @hotmail.com."
      )
      .required("Email is required"),
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "Too Short!")
      .max(25, "Too Long!"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Too Short!")
      .max(25, "Too Long!"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "*Password Must Contain 8-24 Characters.")
      .max(24, "*Password Must Contain 8-24 Characters.")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[A-Za-z\d~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]+$/,
        "Password Must Contain At Least 8 Characters Including At Least One Uppercase, One Lowercase, One Number And One Special Case Character. Blank Spaces Are Not Allowed."
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not Match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {},
  });

  const handleRegister = async () => {
    try {
      const result: RegisterResponse = await userRegister({
        emailAddress: formik.values.email.trim(),
        lastName: formik.values.lastName.trim(),
        password: formik.values.password.trim(),
        firstName: formik.values.firstName.trim(),
      });
      console.log("first212", result);

      if (result?.status === 200) {
        // dispatch(setJwtToken(result?.token));

        navigate("/");
      } else {
        // toaster.info("Login failed");
        // navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `url(${dawai2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Register</h1>
            </div>
            <Formik
              initialValues={formik.initialValues}
              validationSchema={registerSchema}
              onSubmit={handleRegister}
            >
              <Form className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={
                        formik.errors.email && formik.touched.email ? (
                          <span className="error-message">
                            {formik.errors.email}
                          </span>
                        ) : null
                      }
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Email Address
                    </label>
                  </div>

                  <div className="relative">
                    <Field
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      error={
                        formik.errors.firstName && formik.touched.firstName ? (
                          <span className="error-message">
                            {formik.errors.firstName}
                          </span>
                        ) : null
                      }
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      First Name
                    </label>
                  </div>
                  <div className="relative">
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      error={
                        formik.errors.lastName && formik.touched.lastName ? (
                          <span className="error-message">
                            {formik.errors.lastName}
                          </span>
                        ) : null
                      }
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Last Name
                    </label>
                  </div>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      error={
                        formik.errors.password && formik.touched.password ? (
                          <span className="error-message">
                            {formik.errors.password}
                          </span>
                        ) : null
                      }
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Confirm Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      error={
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword ? (
                          <span className="error-message">
                            {formik.errors.confirmPassword}
                          </span>
                        ) : null
                      }
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Confirm Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      onClick={handleRegister}
                      className="bg-cyan-500 text-white rounded-md px-2 py-1"
                    >
                      Register
                    </button>
                  </div>
                  <div className="mt-4 text-sm">
                    <p>
                      Already Have Account?{" "}
                      <Link to="/" className="text-cyan-500 hover:underline">
                        login here
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
