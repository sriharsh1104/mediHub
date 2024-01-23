import "./AddRole.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRole } from "../../../../../Redux/Actions/user.action";
import CommonModal from "../../../../Common/CommonModal/CommonModal";
import InputCustom from "../../../../Common/Inputs/InputCustom";
import ButtonCustom from "../../../../Common/Button/ButtonCustom";
import { EyeIcon } from "../../../../../Assets/Images/Icons/SvgIcons";
import TreeItem from "@material-ui/lab/TreeItem";
import { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";

const AddRole = (props: any) => {
  const navigate = useNavigate();
  const organizationId = useSelector(
    (state: any) => state?.user?.companyData?.companyId
  );
  const [showRoleDropdown, setshowRoleDropdown] = useState(false);
  const [addRoleChart, setAddRoleChart] = useState<any>();

  const employEditModalSchema = Yup.object().shape({
    roleName: Yup.string().required("*This Field Is Required."),
    reportingTo: Yup.string().required("*Old Password Is Required."),
    description: Yup.string().required("*Old Password Is Required."),
    reportingToId: Yup.number().required("*Old Password Is Required."),
  });

  const formik = useFormik({
    initialValues: {
      companyId: "",
      roleName: "",
      reportingTo: "",
      reportingToId: {},
    },
    validationSchema: employEditModalSchema,
    onSubmit: async (values) => {},
  });
  const handleCrossClick = () => {
    formik.resetForm();
    props?.onHide();
  };

  const addNewRole = async (e: any) => {
    try {
      e.preventDefault();
      const result: any = await addRole({
        companyId: organizationId,
        positionName: formik.values.roleName,
        reportingTo:addRoleChart.rolesInfo.displayName,
        reportingToId: addRoleChart.rolesInfo.roleId,
      });

      if (result?.status === 200) {
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderTree = (nodes: any) => {
    console.log("dsajsdadsaasdsad", nodes);
    return (
      <TreeItem
        key={nodes.nodeId}
        nodeId={nodes.rolesInfo?.roleId}
        label={nodes.rolesInfo?.displayName}
        onLabelClick={(e) => {
          e.stopPropagation();
          setAddRoleChart(nodes);
          setshowRoleDropdown(false);
        }}
      >
        {Array.isArray(nodes.children) ? nodes.children.map(renderTree) : null}
      </TreeItem>
    );
  };
  console.log("first213", addRoleChart);
  return (
    <>
      <CommonModal
        heading="New Role"
        show={props?.show}
        onHide={handleCrossClick}
        className="change-modal"
        crossBtn
      >
        <div className="change-modal-inner">
          <InputCustom
            label={
              <>
                RoleName<sup>*</sup>
              </>
            }
            placeholder="Enter Your RoleName"
            id="roleName"
            name="roleName"
            // rightIcon={<CloseEye />}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.roleName}
            error={
              formik.errors.roleName && formik.touched.roleName ? (
                <span className="error-message">
                  {/* {formik.errors.name} */}
                </span>
              ) : null
            }
          />
          <div onClick={() => setshowRoleDropdown(true)}>
            <InputCustom
              readOnly
              label={
                <>
                  ReportingTo<sup>*</sup>
                </>
              }
              placeholder=" Reporting To"
              // rightIcon={<CloseEye />}
              id="reportingTo"
              name="reportingTo"
              type="text"
              value={addRoleChart?.rolesInfo?.displayName}
            />
          </div>

          <ButtonCustom
            title="Save"
            type="submit"
            className="mw-100"
            onClick={(e: any) => addNewRole(e)}
          />
          <ButtonCustom
            title="Cancel"
            type="submit"
            className="mw-100"
            onClick={handleCrossClick}
          />
        </div>
      </CommonModal>
      {showRoleDropdown && (
        <CommonModal
          show={showRoleDropdown}
          onHide={() => setshowRoleDropdown(false)}
        >
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon="-"
            defaultExpandIcon="+"
          >
            {props?.data?.map(renderTree)}
          </TreeView>
        </CommonModal>
      )}
    </>
  );
};

export default AddRole;
