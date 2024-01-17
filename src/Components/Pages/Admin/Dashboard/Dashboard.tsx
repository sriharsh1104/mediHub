import { Col, Container, Row } from "react-bootstrap";
import DashboardCard from "./DashboardCard/DashboardCard";
import user from "../../../../Assets/Images/user_img.png";
import "./Dashboard.scss";
import CustomPagination from "../../../Common/CustomPagination/CustomPagination";
import { useEffect, useState } from "react";
import { getAllEmployeesForAdmin } from "../../../../Redux/Actions/user.action";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const organizationId = useSelector(
    (state: any) => state?.user?.companyId
  );
  console.log('organizationId', organizationId)

  const [employeeData, setEmployeeData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: any = await getAllEmployeesForAdmin({
          companyId: organizationId,
        });

        if (result?.status === 200) {
          setEmployeeData(result?.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [organizationId]);

  return (
    <section className="user_details">
      <Container fluid>
        <Row className="mt-5">
          {employeeData?.map((employee: any) => (
            <Col xl={4} md={6} sm={6} key={employee}>
              <DashboardCard
                key={employee?.id} // Make sure each component has a unique key
                designation={employee?.designation}
                name={employee?.name}
                email={employee?.email}
                salary={employee?.salary}
                joinDate={employee?.doj}
                employID={employee?.empId}
              />
            </Col>
          ))}
          <CustomPagination className="dashboard_pagination" />
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;
