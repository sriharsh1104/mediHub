import "../Dashboard.scss";

const DashboardCard = ({
  designation,
  name,
  email,
  salary,
  joinDate,
  employID,
}: any) => {
  return (
    <div className="dashboard_card">
      <div className="dashboard_card_inner">
        <div className="dashboard_card_inner_header">
          <div className="ms-4">
            <p>Designation: {designation}</p>
            <h4>Name: {name}</h4>
            <p>EmailAddress: {email}</p>
            <p>Salary: {salary}</p>
            <p>Employee Id: {employID}</p>
          </div>
        </div>
        <div className="dashboard_card_inner_body">
          <h6>Date Of Joining {joinDate}</h6>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
