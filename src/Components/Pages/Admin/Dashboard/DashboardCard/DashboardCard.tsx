import React from "react";
import "./DashboardCard.scss";
import ButtonCustom from "../../../../Common/Button/ButtonCustom";
import { Link } from "react-router-dom";

const DashboardCard = ({ id, name, email, icon, date }) => {

  const data = [
    {
      head: "Gitlab URL",
      text: "www.auditbazaar.com",
    },
    {
      head: "Offered Amount",
      text: "10k USD",
    },
    {
      head: "Expected Timeline",
      text: "20 Days",
    },
  ]
  return (
    <div className="dashboard_card">
      <Link to="/admin/dashboard-listing"><ButtonCustom className="dashboard_card_btn" title="View Request" /></Link>
      <div className="dashboard_card_inner">
        <div className="dashboard_card_inner_header">
          <span className="token_icon">
            <img src={icon} alt="" />
          </span>
          <div className="ms-4">
            <p>U ID: {id}</p>
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        </div>
        <div className="dashboard_card_inner_body">
          <h6>Posted On: {date}</h6>
        </div>
      </div>
      <div className="dashboard_card_audit">
        <h6>Audit Types: </h6>
        <div className="dashboard_card_audit_card">
          <p>Smart Contract Audit</p>
        </div>
        <div className="dashboard_card_audit_card">
          <p>Performance Testing</p>
        </div>
        <div className="dashboard_card_audit_card">
          <p>Penetration Testing</p>
        </div>
      </div>
      <div className="dashboard_card_footer">
        {data.map((item, index) => (
          <div className="dashboard_card_footer_inner" key={index}>
            <h4>{item.head}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;
