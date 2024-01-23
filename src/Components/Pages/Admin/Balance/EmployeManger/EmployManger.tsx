import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Dispatch, useEffect, useState } from "react";
import ButtonCustom from "../../../../Common/Button/ButtonCustom";
import InputCustom from "../../../../Common/Inputs/InputCustom";
import "../EmployeManger/Balance.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommonHeader from "../../../../Common/CommonHeader/CommonHeader";
import {
  addEmployInCompany,
  fetchRole,
  filterReportingManager,
} from "../../../../../Redux/Actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { EmployManger } from "../../../../../interface/ApiResponses/EmployManger";
import DatePickerCustom from "../../../../Common/DatePickerCustom/DatePickerCustom";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import CommonModal from "../../../../Common/CommonModal/CommonModal";
import Select from "../../../../Common/Select/Select";
interface Employee {
  id: number;
  displayName: string;
  reportingTo?: { name: string; id: number };
  roleId: number;
}

const EmployMange = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const [addRoleChart, setAddRoleChart] = useState<any>();
  const organizationId = useSelector(
    (state: any) => state?.user?.companyData?.companyId
  );
  const [check, setCheck] = useState<any>({ state: false, value: "" });
  const [orgData, setOrgData] = useState<any>([]);
  const [isTreeViewOpen, setIsTreeViewOpen] = useState(false);

  const employeeSchema = Yup.object().shape({
    name: Yup.string().required("*This Field Is Required."),
    email: Yup.string()
      .email("Input A Valid Email.")
      .required("*This Field Is Required.")
      .max(300, "Maximum 300 Characters Are Allowed For Email.")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email"
      ),
    designation: Yup.string().required("*This Field Is Required."),
    salary: Yup.string()
      .matches(/^[0-9]+$/, "Only numerical values are allowed for Salary.")
      .required("*This Field Is Required."),
    empId: Yup.number().required("*This Field Is Required."),
    DateOfJoining: Yup.string().required("*This Field Is Required."),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "",
      salary: "",
      empId: 0,
      DateOfJoining: "",
      reportingTo: "",
    },
    validationSchema: employeeSchema,
    onSubmit: async (values) => {},
  });
  const addEmployForOrganization = async () => {
    try {
      const result: EmployManger = await addEmployInCompany({
        name: formik.values.name.trim(),
        email: formik.values.email.trim(),
        role: addRoleChart.rolesInfo.displayName,
        salary: formik.values.salary.trim(),
        empId: formik.values.empId,
        DateOfJoining: formik.values.DateOfJoining.trim(),
        companyId: organizationId,
        reportingTo: formik.values.reportingTo,
      });
      if (result?.status === 200) {
        console.log("Employee added successfully");
      } else {
        console.error("Error adding employee");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (addRoleChart) fetchDataForReportingManager();
  }, [addRoleChart]);
  const fetchDataForReportingManager = async () => {
    try {
      const result = await filterReportingManager({
        companyId: organizationId,
        roleId: addRoleChart?.rolesInfo?.roleId,
      });

      if (result?.status === 200 && result?.data) {
        console.log("result123", result);
        setOrgData(result?.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };
  const fetchData = async () => {
    try {
      const result = await fetchRole({ companyId: organizationId });

      if (result?.status === 200 && result?.data) {
        console.log("result123", result);
        setOrgData(result?.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };
  useEffect(() => {
    if (check.value) {
      formik.setValues((prevValues) => ({
        ...prevValues,
        DateOfJoining: check.value,
      }));
    }
  }, [check?.state]);
  useEffect(() => {
    formik.setValues({
      name: "",
      email: "",
      role: "",
      salary: "",
      empId: 0,
      DateOfJoining: check.value || "",
      reportingTo: "", // Set the initial value or use an empty string
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [organizationId]);
  const renderTree = (nodes: any) => {
    return (
      <TreeItem
        key={nodes.nodeId}
        nodeId={nodes.rolesInfo?.roleId}
        label={nodes.rolesInfo?.displayName}
        onLabelClick={(e) => {
          e.stopPropagation();
          setAddRoleChart(nodes);
          setIsTreeViewOpen(false);
        }}
      >
        {Array.isArray(nodes.children) ? nodes.children.map(renderTree) : null}
      </TreeItem>
    );
  };
  console.log("isTsssss", isTreeViewOpen);
  return (
    <>
      <section className="login_page">
        <Container>
          <CommonHeader />
          <Row className="align-items-center">
            <Col lg={6}></Col>
            <Col lg={6}>
              <div className="login_page_box">
                <form onSubmit={formik.handleSubmit}>
                  <InputCustom
                    label="Full Name"
                    placeholder=" Full Name"
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    isInvalid={formik.touched.name && !!formik.errors.name}
                    error={
                      formik.errors.name && formik.touched.name ? (
                        <span className="error-message">
                          {formik.errors.name}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="Email Address"
                    placeholder="EmailAddress"
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
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
                  <div onClick={() => setIsTreeViewOpen(true)}>
                    <InputCustom
                      readOnly
                      label={
                        <>
                          ROLE<sup>*</sup>
                        </>
                      }
                      placeholder=" Role"
                      // rightIcon={<CloseEye />}
                      id="role"
                      name="role"
                      type="text"
                      section
                      className="user_details"
                      value={addRoleChart?.rolesInfo?.displayName}
                    />
                  </div>
                  <InputCustom
                    label="Salary"
                    placeholder="Salary Of Employee"
                    id="salary"
                    name="salary"
                    type="text"
                    onChange={(e: any) => {
                      e.preventDefault();
                      const { value } = e.target;
                      const regex = /^(\d+)?$/;
                      if (regex.test(value.toString())) {
                        formik.handleChange(e);
                      }
                    }}
                    value={formik.values.salary}
                    isInvalid={formik.touched.salary && !!formik.errors.salary}
                    error={
                      formik.errors.salary && formik.touched.salary ? (
                        <span className="error-message">
                          {formik.errors.salary}
                        </span>
                      ) : null
                    }
                  />
                  <InputCustom
                    label="Employ Id "
                    placeholder="Employee Id"
                    id="empId"
                    name="empId"
                    type="text"
                    onChange={(e: any) => {
                      e.preventDefault();
                      const { value } = e.target;
                      const regex = /^(\d+)?$/;
                      if (regex.test(value.toString())) {
                        formik.handleChange(e);
                      }
                    }}
                    value={formik.values.empId}
                    isInvalid={formik.touched.empId && !!formik.errors.empId}
                    error={
                      formik.errors.empId && formik.touched.empId ? (
                        <span className="error-message">
                          {formik.errors.empId}
                        </span>
                      ) : null
                    }
                  />
                  <DatePickerCustom
                    label={
                      <>
                        DateOfJoining <sup>*</sup>
                      </>
                    }
                    placeholder="Employ Date Of Joining"
                    id="DateOfJoining"
                    name="DateOfJoining"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.DateOfJoining}
                    dateFormat="dd/MM/yyyy"
                    checkSetter={setCheck}
                    check={check}
                    isInvalid={
                      formik.touched.DateOfJoining &&
                      !!formik.errors.DateOfJoining
                    }
                    error={
                      formik.errors.DateOfJoining &&
                      formik.touched.DateOfJoining ? (
                        <span className="error-message">
                          {formik.errors.DateOfJoining}
                        </span>
                      ) : null
                    }
                  />
                  {addRoleChart?.rolesInfo ? (
                    <Select
                    label="Reporting To"
                    placeholder="Select Reporting Manager"
                    id="reportingTo"
                    name="reportingTo"
                    options={orgData.map((item: any) => ({
                      label: item.name,
                      value: item.id,
                    }))}
                    onChange={(selectedOption: any) => {
                      formik.setFieldValue('reportingTo', selectedOption.value);
                    }}
                    value={orgData.find((item: any) => item.id === formik.values.reportingTo)}
                    // isInvalid={formik.touched.reportingTo && !!formik.errors.reportingTo}
                    error={
                      formik.errors.reportingTo && formik.touched.reportingTo ? (
                        <span className="error-message">
                          {formik.errors.reportingTo}
                        </span>
                      ) : null
                    }
                  />
                ) : null}
                  <div className="login_page_box_btn mt-4">
                    <ButtonCustom
                      type="button"
                      title="Add Member"
                      fluid
                      onClick={addEmployForOrganization}
                    />
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        {isTreeViewOpen ? (
          <CommonModal show={isTreeViewOpen}>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon="-"
              defaultExpandIcon="+"
            >
              {orgData?.map(renderTree)}
            </TreeView>
          </CommonModal>
        ) : null}
      </section>
    </>
  );
};

export default EmployMange;
