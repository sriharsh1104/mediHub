import "./Holiday.scss";
import { useState } from "react";
import ButtonCustom from "../../../Common/Button/ButtonCustom";
import HolidayCard from "./HolidayCard/HolidayCard";

const Holiday = ({}: any) => {
  const [showModal, setShowModal] = useState(false);
  const handleAddHoliday = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="dashboard_card">
      <ButtonCustom
        className="dashboard_card_btn"
        title="Add Holiday"
        onClick={handleAddHoliday}
      />

      {showModal && <HolidayCard  show={showModal} onHide={() => setShowModal(false)} />}

      <div className="dashboard_card_inner">
        <div className="dashboard_card_inner_header"></div>
      </div>
    </div>
  );
};

export default Holiday;
