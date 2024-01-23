import { Col, Container, Row } from "react-bootstrap";
import DashboardCard from "./DashboardCard/DashboardCard";
import user from "../../../../Assets/Images/user_img.png";
import "./Dashboard.scss";
import CustomPagination from "../../../Common/CustomPagination/CustomPagination";
import { useEffect, useState, Dispatch } from "react";
import { getAllEmployeesForAdmin } from "../../../../Redux/Actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { setDashboardTab } from "../../../../Redux/Slices/user.slice";

let limit: number = 9;
const Dashboard = () => {
  const itemsPerPage = 9;

  const dispatch: Dispatch<any> = useDispatch();

  const organizationId = useSelector(
    (state: any) => state?.user?.companyData?.companyId
  );
  const activePage = useSelector((state: any) => state?.user?.dashboardTab);
  const [count, setCount] = useState<any>(0);
  const [currentPage, setCurrentPage] = useState(activePage);
  const [totalPages, setTotalPages] = useState(1);
  const [employeeData, setEmployeeData] = useState<any>(null);
  const [shouldScrollToTop, setShouldScrollToTop] = useState(false);

  const dashbaordDataForAdmin = async (page: any) => {
    try {
      const result: any = await getAllEmployeesForAdmin(
        organizationId,
        page,
        limit
      );

      if (result?.status === 200) {
        setEmployeeData(result?.data);
        setCount(result?.responseCount);
        const totalPosts = result?.responseCount || 0;
        setTotalPages(Math.ceil(totalPosts / itemsPerPage));
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handlePageChange = async (selected: any) => {
    setCurrentPage(selected.selected);
    dispatch(setDashboardTab(selected.selected));
    setShouldScrollToTop(true);
  };
  useEffect(() => {
    dashbaordDataForAdmin(currentPage + 1);
  }, [currentPage + 1]);
  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo(0, 0);
      setShouldScrollToTop(false);
    }
  }, [shouldScrollToTop]);
  return (
    <section className="user_details">
      <Container fluid>
        <Row className="mt-5">
          {employeeData?.map((employee: any) => (
            <Col xl={4} md={6} sm={6} key={employee}>
              <DashboardCard
                key={employee?.id}
                designation={employee?.designation}
                name={employee?.name}
                email={employee?.email}
                salary={employee?.salary}
                joinDate={employee?.doj}
                employID={employee?.empId}
              />
            </Col>
          ))}
          {count > limit ? (
            <CustomPagination
              activePageNumber={currentPage}
              className="dashboard-pagination"
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
            />
          ) : null}
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;
