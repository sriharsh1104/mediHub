"use client";
import React from "react";
import "./loginPage.css";
import Link from "next/link";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "@/api/user.Action";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
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
    password: Yup.string().required("Please Enter The Password."),
  });
  const onSubmit = async (values: any) => {
    try {
      const loginDetails = {
        email: values?.email,
        password: values?.password,
      };
      console.log("loginDetails", loginDetails);
      const result: any = await login(loginDetails);
      if (result === 200) {
        toast.success("Logged In SuccessFully");
        if (result?.status === 200) {
          router.push('/profile');
          
        } else{
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        <Form className="login-form">
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
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p>
            Don’t have an account?{" "}
            <Link href="/signUp">
              {" "}
              Sign up
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
