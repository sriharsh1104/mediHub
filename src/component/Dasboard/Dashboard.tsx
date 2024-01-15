import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllEmployeesForAdmin } from "../Api/Actions/user.action";

const Dashboard: React.FC = () => {
  const organizationId = useSelector(
    (state: any) => state.userDataSlice?.companyId
  );

  const [employeeData, setEmployeeData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: any = await getAllEmployeesForAdmin({
          companyId: organizationId,
        });

        if (result?.status === 200) {
          setEmployeeData(result?.data?.employeeDetails);
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
    <div className="bg-gray-800 mx-auto mt-8">
      <div>
        {employeeData && (
          <ul>
            {employeeData?.map((employee: any) => (
              <h1>{employee?.salary}</h1>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
