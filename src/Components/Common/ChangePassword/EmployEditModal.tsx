import "./ChangePassword.scss";
import CommonModal from "../CommonModal/CommonModal";
import ButtonCustom from "../Button/ButtonCustom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { CloseEye, EyeIcon } from "../../../Assets/Images/Icons/SvgIcons";
import { useNavigate } from "react-router-dom";
import InputCustom from "../Inputs/InputCustom";
import { updateEmplpoyInfo } from "../../../Redux/Actions/user.action";

const EmployEditModal = (props: any) => {
  const navigate = useNavigate();
  const userData = useSelector((state: any) => state?.user?.companyData);
  const employEditModalSchema = Yup.object().shape({
    name: Yup.string().required("*This Field Is Required."),
    email: Yup.string().required("*Old Password Is Required."),
    designation: Yup.string().required("*Old Password Is Required."),
    salary: Yup.string().required("*Old Password Is Required."),
    DateOfJoining: Yup.string().required("*Old Password Is Required."),
    empId: Yup.string().required("*Old Password Is Required."),
    companyId: Yup.string().required("*Old Password Is Required."),
    deleteEmployee: Yup.string().required("*Old Password Is Required."),
  });

  const formik = useFormik({
    initialValues: {
      name: props.name,
      email: props?.email,
      designation: props?.designation,
      salary: props?.salary,
      DateOfJoining: props?.joinDate,
      empId:props?.employID,
      companyId: props?.companyId,
      deleteEmployee: false,
    },
    validationSchema: employEditModalSchema,
    onSubmit: async (values) => {},
  });
  const handleCrossClick = () => {
    formik.resetForm();
    props?.onHide();
  };

  const updateEmployeeData = async (e: any) => {
    try {
      e.preventDefault();
      const result: any = await updateEmplpoyInfo({
        name: formik.values.name,
        email: formik.values.email,
        designation: formik.values.designation,
        salary: formik.values.salary,
        DateOfJoining: formik.values.DateOfJoining,
        empId: formik.values.empId,
        companyId: userData?.companyId,
        deleteEmployee: formik.values.deleteEmployee,
      });

      if (result?.status === 200) {
        // formik.resetForm();
        // props?.onHide();
      } else {
        // formik.resetForm();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CommonModal
        heading="Employee Information"
        show={props?.show}
        onHide={handleCrossClick}
        className="change-modal"
        crossBtn
      >
        <div className="change-modal-inner">
          <InputCustom
            label={
              <>
                Name<sup>*</sup>
              </>
            }
            placeholder="Enter Your Name"
            id="name"
            name="name"
            // rightIcon={<CloseEye />}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={
              formik.errors.name && formik.touched.name ? (
                <span className="error-message">
                  {/* {formik.errors.name} */}
                </span>
              ) : null
            }
          />
          <InputCustom
            label={
              <>
                Salary<sup>*</sup>
              </>
            }
            placeholder="Employee Salary"
            // rightIcon={<CloseEye />}
            id="salary"
            name="salary"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.salary}
            error={
              formik.errors.salary && formik.touched.salary ? (
                <span className="error-message">
                  {/* {formik.errors.salary} */}
                </span>
              ) : null
            }
          />
          <InputCustom
            label={
              <>
                Designation <sup>*</sup>
              </>
            }
            placeholder="Employ Designation"
            id="designation"
            name="designation"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.designation}
            rightIcon={EyeIcon}
            error={
              formik.errors.designation && formik.touched.designation ? (
                <span className="error-message">
                  {/* {formik.errors.designation} */}
                </span>
              ) : null
            }
          />
          <InputCustom
            label={
              <>
                DateOfJoining <sup>*</sup>
              </>
            }
            placeholder="Employ DateOfJoining"
            id="DateOfJoining"
            name="DateOfJoining"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.DateOfJoining}
            rightIcon={EyeIcon}
            error={
              formik.errors.DateOfJoining && formik.touched.DateOfJoining ? (
                <span className="error-message">
                  {/* {formik.errors.DateOfJoining} */}
                </span>
              ) : null
            }
          />
          <ButtonCustom
            title="Update User Profile"
            type="submit"
            className="mw-100"
            onClick={(e: any) => updateEmployeeData(e)}
          />
        </div>
      </CommonModal>
    </>
  );
};

export default EmployEditModal;
