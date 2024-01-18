import "./ChangePassword.scss";
import CommonModal from "../CommonModal/CommonModal";
import ButtonCustom from "../Button/ButtonCustom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateEmplpoyInfo } from "../../../Redux/Actions/user.action";

const EmployDeleteModal = (props: any) => {
  const navigate = useNavigate();
  const userData = useSelector((state: any) => state?.user?.companyData);
  const employDeleteModalSchema = Yup.object().shape({
    empId: Yup.string().required("*Old Password Is Required."),
    companyId: Yup.string().required("*Old Password Is Required."),
    deleteEmployee: Yup.string().required("*Old Password Is Required."),
  });

  const formik = useFormik({
    initialValues: {
      empId: props?.employID,
      companyId: props?.companyId,
      deleteEmployee: true,
    },
    validationSchema: employDeleteModalSchema,
    onSubmit: async (values) => {},
  });
  const handleCrossClick = () => {
    formik.resetForm();
    props?.onHide();
  };

  const deleteEmployeeData = async (e: any) => {
    try {
      e.preventDefault();
      const result: any = await updateEmplpoyInfo({
        empId: formik.values.empId,
        companyId: formik.values.companyId,
        deleteEmployee: formik.values.deleteEmployee,
      });

      if (result?.status === 200) {
        handleCrossClick();
      } else {
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
          <h3>Are You Sure Want To Delete?</h3>
          <ButtonCustom
            title="Yes"
            type="submit"
            className="mw-100"
            onClick={(e: any) => deleteEmployeeData(e)}
          />
          <ButtonCustom
            title="NO"
            type="submit"
            className="mw-100"
            onClick={handleCrossClick}
          />
        </div>
      </CommonModal>
    </>
  );
};

export default EmployDeleteModal;
