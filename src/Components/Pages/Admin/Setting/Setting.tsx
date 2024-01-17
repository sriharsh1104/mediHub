import "./Setting.scss";
import { Col, Row, Form } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import store from "../../../../Redux/Store";
import InputCustom from "../../../Common/Inputs/InputCustom";
import { useState } from "react";
import ButtonCustom from "../../../Common/Button/ButtonCustom";
import TextArea from "../../../Common/FormInputs/TextArea";
import social_img from "../../../../Assets/Images/git-hub.svg"
import social_img2 from "../../../../Assets/Images/linkndin.svg"
import social_img3 from "../../../../Assets/Images/telegram.svg"
import social_img4 from "../../../../Assets/Images/insta.svg"



const Setting = () => {
  const userData: any = useSelector((state: any) => state?.user);

  const settingSchema = Yup.object().shape({
    gitHub: Yup.string().matches(
      /^(https?:\/\/)?(www\.)?github\.com\/[^\s/]+$/,
      "Please Enter A Valid GitHub Profile URL."
    ),
    linkedIn: Yup.string().matches(
      /^https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9_.-]+$/,
      "Please Enter A Valid Linkedin Profile URL."
    ),
    telegram: Yup.string().matches(
      /^https:\/\/t\.me\/[A-Za-z0-9_]+$/,
      "Please Enter A Valid Telegram Profile URL."
    ),
    instagram: Yup.string().matches(
      /^https:\/\/t\.me\/[A-Za-z0-9_]+$/,
      "Please Enter A Valid instagram Profile URL."
    ),
    address: Yup.string().min(2, "Too Short!").max(25, "Too Long!"),

    bio: Yup.string().max(2000, "Maximum 2000 Characters Allowed."),
    Contact_Number: Yup.string().max(2000, "Maximum 2000 Characters Allowed."),
    Country: Yup.string().max(2000, "Maximum 2000 Characters Allowed."),
    Pincode: Yup.string().max(2000, "Maximum 2000 Characters Allowed."),
  });

  const formik = useFormik({
    initialValues: {
      gitHub: userData?.gitHub,
      linkedIn: userData?.linkedIn,
      telegram: userData?.telegram,
      instagram: userData?.instagram,
      address: userData?.address,
      bio: userData?.bio,
      Contact_Number: userData?.contact_Number,
      Country: userData?.country,
      Pincode: userData?.cincode,
    },
    validationSchema: settingSchema,
    onSubmit: async (values) => {},
  });

  return (
    /*------------Setting Page Starts------------*/

    <section className="Setting">
      <h4 className="common-heading">Settings</h4>
      <div className="Setting_box">
        <div className="Setting_box_header">
          <div className="Setting_box_header_info">
            <div className="list_content">
              <h6 className="user_info_name">{userData?.firstName}</h6>
              <p className="user_email">{userData?.emailAddress}</p>
            </div>
          </div>
        </div>
        <Form>
          <Form.Group className="Post_request_inputList">
            <Row>
              <Col md={6} xl={4}>
                <InputCustom
                  label="Office Address"
                  placeholder="Enter Your Address"
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  defaultValue={userData?.address}
                  value={formik.values.address}
                  isInvalid={
                    formik.touched.gitHub && formik.errors.address
                      ? "is-invalid"
                      : ""
                  }
                  error={
                    formik.errors.address || formik.touched.address ? (
                      <span className="error-message">
                        {/* //   {formik.errors.gitHub} */}
                      </span>
                    ) : null
                  }
                ></InputCustom>
              </Col>
              <Col md={6} xl={4}>
                <InputCustom
                  label="Contact_Number"
                  placeholder="Enter your Contact_Number"
                  id="Contact_Number"
                  name="Contact_Number"
                  type="text"
                  onChange={formik.handleChange}
                  defaultValue={userData?.contact_Number || ""}
                  value={formik.values.Contact_Number}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.touched.Contact_Number &&
                    formik.errors.Contact_Number
                      ? "is-invalid"
                      : ""
                  }
                  error={
                    formik.errors.Contact_Number ||
                    formik.touched.Contact_Number ? (
                      <span className="error-message">
                        {/* {formik.errors.linkedIn} */}
                      </span>
                    ) : null
                  }
                ></InputCustom>
              </Col>
              <Col md={6} xl={4}>
                <InputCustom
                  label="Country "
                  placeholder="Select Your Country"
                  id="Country"
                  name="Country"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  readOnly={true}
                  value={formik.values.Country}
                  isInvalid={
                    formik.touched.Country && formik.errors.Country
                      ? "is-invalid"
                      : ""
                  }
                  error={
                    formik.errors.Country && formik.touched.Country ? (
                      <span className="error-message"></span>
                    ) : null
                  }
                  disabled
                ></InputCustom>
              </Col>
              <Col md={6} xl={4}>
                <InputCustom
                  label="Pincode "
                  placeholder="Select Your Pincode"
                  id="Pincode"
                  name="Pincode"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  readOnly={true}
                  value={formik.values.Pincode}
                  isInvalid={
                    formik.touched.Pincode && formik.errors.Pincode
                      ? "is-invalid"
                      : ""
                  }
                  error={
                    formik.errors.Pincode && formik.touched.Pincode ? (
                      <span className="error-message"></span>
                    ) : null
                  }
                  disabled
                ></InputCustom>
              </Col>
              <Col md={6} xl={4}>
                <Form.Label>GitHub</Form.Label>
                <div className="social_account">
                  <div className="social_links">
                    <div className="social_img">
                      <img src={social_img} alt="social-img" />
                    </div>
                    {formik.values.gitHub ? (
                      <a
                        href={formik.values.gitHub}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    ) : (
                      <span>GitHub</span>
                    )}
                  </div>
                  <InputCustom
                    placeholder="Enter your Github Profile"
                    className="github_inp"
                    id="gitHub"
                    name="gitHub"
                    inputName="post_input blue"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue={userData?.gitHub}
                    value={formik.values.gitHub}
                    isInvalid={
                      formik.touched.gitHub && formik.errors.gitHub
                        ? "is-invalid"
                        : ""
                    }
                    error={
                      formik.errors.gitHub && formik.touched.gitHub ? (
                        <span className="error-message"></span>
                      ) : null
                    }
                  ></InputCustom>
                </div>
                {/* <span className="error-message">{formik.errors.gitHub}</span> */}
              </Col>
              <Col md={6} xl={4}>
                <Form.Label>Linkedin</Form.Label>
                <div className="social_account">
                  <div className="social_links">
                    <div className="social_img">
                      <img src={social_img2} alt="social-img" />
                    </div>
                    {formik.values.linkedIn ? (
                      <a
                        href={formik.values.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin_link"
                      >
                        Linkedin
                      </a>
                    ) : (
                      <span>Linkedin</span>
                    )}
                  </div>

                  <InputCustom
                    placeholder="Enter your Linkedin Profile"
                    id="linkedIn"
                    className="linked_inp"
                    inputName="post_input blue2"
                    name="linkedIn"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultvalue={userData?.linkedIn}
                    value={formik.values.linkedIn}
                    isInvalid={
                      formik.touched.linkedIn && formik.errors.linkedIn
                        ? "is-invalid"
                        : ""
                    }
                    error={
                      formik.errors.linkedIn && formik.touched.linkedIn ? (
                        <span className="error-message"></span>
                      ) : null
                    }
                  ></InputCustom>
                </div>
                {/* <span className="error-message">{formik.errors.linkedIn}</span> */}
              </Col>
              <Col md={6} xl={4}>
                <Form.Label>Telegram</Form.Label>
                <div className="social_account">
                  <div className="social_links">
                    <div className="social_img">
                      <img src={social_img3} alt="social-img" />
                    </div>
                    {formik.values.telegram ? (
                      <a
                        href={formik.values.telegram}
                        target="_blank"
                        rel="noreferrer"
                        className="telegram_link"
                      >
                        Telegram
                      </a>
                    ) : (
                      <span>Telegram</span>
                    )}
                  </div>
                  <InputCustom
                    placeholder="Enter your Telegram Link"
                    id="telegram"
                    inputName="post_input blue3"
                    className="telegram_inp"
                    name="telegram"
                    type="text"
                    onChange={formik.handleChange}
                    defaultvalue={formik.values.telegram}
                    onBlur={formik.handleBlur}
                    value={formik.values.telegram}
                    isInvalid={
                      formik.touched.telegram && formik.errors.telegram
                        ? "is-invalid"
                        : ""
                    }
                    error={
                      formik.errors.telegram && formik.touched.telegram ? (
                        <span className="error-message"></span>
                      ) : null
                    }
                  ></InputCustom>
                </div>
                {/* <span className="error-message">{formik.errors.telegram}</span> */}
              </Col>
              <Col md={6} xl={4}>
                <Form.Label>Instagram</Form.Label>
                <div className="social_account">
                  <div className="social_links">
                    <div className="social_img">
                      <img src={social_img4} alt="social-img" />  
                    </div>
                    <span>Instagram</span>
                  </div>
                  <InputCustom
                    placeholder="Enter Your Instagram"
                    id="instagram"
                    name="instagram"
                    type="text"
                    onChange={formik.handleChange}
                    defaultvalue={formik.values.instagram}
                    onBlur={formik.handleBlur}
                    value={formik.values.instagram}
                    isInvalid={
                      formik.touched.instagram && formik.errors.instagram
                        ? "is-invalid"
                        : ""
                    }
                  ></InputCustom>
                </div>
                <span className="error-message">
                  {/* {formik.errors.instagram} */}
                </span>
              </Col>
              <Row className="p-0 m-0">
                <Col xl={4}>
                  <div className="text_area">
                    <TextArea
                      placeholder="Enter About Yourself"
                      label="Profile Bio"
                      id="bio"
                      name="bio"
                      type="text"
                      onChange={formik.handleChange}
                      defaultvalue={formik.values.bio}
                      onBlur={formik.handleBlur}
                      value={formik.values.bio}
                      isInvalid={
                        formik.touched.bio && formik.errors.bio
                          ? "is-invalid"
                          : ""
                      }
                      error={
                        formik.errors.bio && formik.touched.bio ? (
                          <span className="error-message">
                            {/* {formik.errors.bio} */}
                          </span>
                        ) : null
                      }
                    ></TextArea>
                  </div>
                </Col>
              </Row>
              <Col xl={12}>
                <ButtonCustom
                  title="Update"
                  type="submit"
                  className="confirm_btn"
                  onClick={(e: any) => {}}
                />
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </section>

    /*------------Setting Page Ends------------*/
  );
};

export default Setting;
