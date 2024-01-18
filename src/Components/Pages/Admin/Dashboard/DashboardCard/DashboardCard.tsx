import { Link } from "react-router-dom";
import ButtonCustom from "../../../../Common/Button/ButtonCustom";
import defaultUserIcon from "../../../../../Assets/Images/profile-img.svg";
import "../Dashboard.scss";
import { useState } from "react";
import EmployEditModal from "../../../../Common/EmployEditModal/EmployEditModal";

const DashboardCard = ({
  designation,
  name,
  email,
  joinDate,
  salary,
  employID,
}: any) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    console.log("Deleting");
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="dashboard_card">
      <Link to="/">
        <ButtonCustom className="dashboard_card_new" title="View Post" />
      </Link>
      <ButtonCustom className="dashboard_card_user" title={designation} />
      <EmployEditModal
        designation={designation}
        name={name}
        email={email}
        joinDate={joinDate}
        salary={salary}
        employID={employID}
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
      />
      <ButtonCustom
        className="dashboard_card_btn"
        title="Edit"
        onClick={handleEdit}
      />
      <div className="dashboard_card_inner_body">
        <h6>Joining Date: {joinDate}</h6>
      </div>
      <div className="dashboard_card_inner">
        <div className="dashboard_card_inner_header">
          <span className="token_icon">
            <img src={defaultUserIcon} alt="user_img" />
          </span>
          <div className="user_id">
            <p>EmpId: {employID}</p>
            <h4>Emp Name : {name}</h4>
            <p>Email: {email}</p>
          </div>
        </div>
      </div>
      <div className="dashboard_card_footer">
        {[1, 2, 3]?.map((item: any, key: any) => (
          <div key={key} className="dashboard_card_footer_inner">
            <h4>{item?.head}</h4>
            <p>
              {item?.head === "Offered Amount"
                ? item?.text + " USD"
                : item?.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;
