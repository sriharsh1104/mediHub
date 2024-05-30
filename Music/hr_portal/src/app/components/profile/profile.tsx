"use client";
import React, { useState } from "react";
import "./profile.css";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login, updateProfile } from "@/api/user.Action";

const Profilepage = () => {
  const initialValues = {
    email: "",
    username: "",
    phone: "",
    profilePic: null, // Updated: Initial value set to null
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
    phone: Yup.string().required("Please Enter Your Phone Number."),
    profilePic: Yup.mixed().required("Please Select Your Profile Picture."), // Updated: Profile picture is required
  });

  const onSubmit = async (values:any, { setSubmitting }:any) => {
    try {
      
      const formData = new FormData();
      formData.append('image', values.image);

      const profileDetails = {
        email: values.email,
        username: values.username,
        phone: values.phone,
        profilePic: values.profilePic, // Updated: Include selected profile picture
      };
      console.log("profileDetails", profileDetails);
      const result = await updateProfile(profileDetails);
      if (result === 200) {
        toast.success("Logged In Successfully");
        // Handle success
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="profile-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting,setFieldValue }) => (
          <Form className="profile-form">
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
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <Field type="text" id="phone" name="phone" />
              <ErrorMessage
                name="phone"
                component="div"
                className="error-message"
              />
            </div>
            <div className="input-group">
              <label htmlFor="profilePic">Profile Picture</label>
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                
              />
              <ErrorMessage
                name="profilePic"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" disabled={isSubmitting} className="profile-button">
              Update Profile
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profilepage;
