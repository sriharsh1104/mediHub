"use client";
import { signUp } from "@/api/user.Action";
import React from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import "./signUpPage.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";

const SignupPage = () => {
  const initialValues = {
    email: "",
    username: "",
    password: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please Enter a Valid Email Address.")
      .required("*This Field Is Required.")
      .max(300, "Maximum 300 Characters Are Allowed For Email.")
      .test("No-Consecutive-Dots", "Invalid Email", (value) => {
        if (!value) return true;
        return !/\.{2,}/.test(value);
      }),
    username: Yup.string()
      .required("Please Enter Username.")
      .max(12, "*User Name Must Contain 2 to 12 Characters.")
      .min(2, "*User Name Must Contain 2 to 12 Characters.")
      .matches(
        /^(?=.*[a-zA-Z])[a-zA-Z0-9]{2,12}$/,
        "Username Must Be Alphanumeric With 2 to 12 Characters."
      ),

    phone: Yup.string().required("*Phone Number Is Required."),
    password: Yup.string()
      .required("*This Field Is Required.")
      .min(8, "*Password Must Contain 8-24 Characters.")
      .max(24, "*Password Must Contain 8-24 Characters.")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[A-Za-z\d~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]+$/,
        "Password Must Contain At Least 8 Characters Including At Least one Uppercase, One Lowercase, One Number and One Special Case Character. Blank Spaces Are Not Allowed."
      ),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    try {
      const signUpDetails = {
        email: values?.email,
        username: values?.username,
        phone: values?.phone,
        password: values?.password,
      };
      const result: any = await signUp(signUpDetails);
      if (result?.status === 200) {
        resetForm();
        toast.success("Signed Up Successfully");
      } else {
        toast.error("Signed up Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signUp-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="signUp-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">User-Name</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message"
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <Field type="number" id="phone" name="phone" />
            <ErrorMessage
              name="phone"
              component="div"
              className="error-message"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="signUp-button">
            Submit
          </button>
          <p>
            Don’t have an account?{" "}
            <Link href="/login">
              {" "}
              <a color="black">Sign-In</a>
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupPage;
