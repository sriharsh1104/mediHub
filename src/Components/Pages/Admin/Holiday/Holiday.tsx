import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Dispatch, useState } from "react";
import ButtonCustom from "../../../Common/Button/ButtonCustom";
import InputCustom from "../../../Common/Inputs/InputCustom";
import "./Holiday.scss";
import { Col, Container, Row } from "react-bootstrap";
import oraora from "../../../../Assets/Images/oraora.png";
import CommonHeader from "../../../Common/CommonHeader/CommonHeader";
import { holidayListForEmployee } from "../../../../Redux/Actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { LoginResponse } from "../../../../interface/ApiResponses/LoginResponse";
import DatePickerCustom from "../../../Common/DatePickerCustom/DatePickerCustom";
import Select from "../../../Common/Select/Select";

const Holiday = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const [check, setCheck] = useState<any>({ state: false, value: "" });
  const [addField, setAddField] = useState<any>([1]);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const organizationId = useSelector(
    (state: any) => state?.user?.companyData?.companyId
  );

  const holidaySchema = Yup.object().shape({
    companyId: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    year: Yup.number().required("Required"),
    date: Yup.number().required("Required"),

  });
  const formik = useFormik({
    initialValues: {
      companyId:organizationId ,
      name: "",
      year: 0,
      date: 0,
    },
    validationSchema: holidaySchema,
    onSubmit: async (values) => {},
  });
  const holidayList = async () => {
    try {
      const result: any = await holidayListForEmployee({
        companyId: organizationId,
        name: formik.values.name.trim(),
        year:
          selectedYear === "next"
            ? String(new Date().getFullYear() + 1)
            : String(new Date().getFullYear()),
        date: formik.values.date,
      });
      if (result?.status === 200) {
      } else {
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
          <div className="">
            <h4>Holiday List</h4>
            <form onSubmit={formik.handleSubmit} className="formHoliday">
              <Select
                label="Select Year"
                id="year"
                name="year"
                onChange={(selectedYear: any) => {
                  setSelectedYear(selectedYear.value);
                  formik.setFieldValue("year", selectedYear);
                }}
                value={formik.values.year}
                options={[
                  {
                    label: new Date().getFullYear(),
                    value: new Date().getFullYear(),
                  },
                  {
                    label: new Date().getFullYear() + 1,
                    value: new Date().getFullYear() + 1,
                  },
                ]}
              />
              {addField?.map((value: any) => (
                <div className="datePicker">
                  <InputCustom
                    label="Holiday Name"
                    placeholder="Name Holiday"
                    id="name"
                    name="name"
                    type="select"
                    onChange={formik.handleChange}
                    autoFocus={true}
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
                  <DatePickerCustom
                    label="Select Date"
                    placeholder="Select Date"
                    id="date"
                    name="date"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checkSetter={setCheck}
                    check={check}
                    value={formik.values.date}
                    dateFormat="dd/MM/yyyy"
                    isInvalid={formik.touched.date && !!formik.errors.date}
                    error={
                      formik.errors.date && formik.touched.date ? (
                        <span className="error-message">
                          {formik.errors.date}
                        </span>
                      ) : null
                    }
                    year={selectedYear} // Pass the selected year to the DatePickerCustom component
                  />
                </div>
              ))}
              <button
                onClick={() =>
                  setAddField([...addField, addField.push(addField.length + 1)])
                }
              >
                Add Field
              </button>
              <button
                onClick={() => setAddField(addField == 1 ? {} : addField.pop())}
              >
                Remove Field
              </button>

              <div className="">
                <ButtonCustom
                  type="button"
                  title="Save"
                  fluid
                  className="sm-btn"
                  onClick={holidayList}
                />
                <ButtonCustom
                  type="button"
                  title="cancel"
                  fluid
                  className="sm-btn"
                  //   onClick={holidayList}
                />
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Holiday;
