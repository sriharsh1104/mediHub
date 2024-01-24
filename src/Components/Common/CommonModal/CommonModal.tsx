import { ReactNode } from "react";
import { Modal } from "react-bootstrap";
import closeIcon from "../../../Assets/Images/Icons/close.png";
import "./CommonModal.scss";

interface CommonModals {
  show?: boolean;
  onHide?: () => void;
  heading?: ReactNode;
  className?: string;
  onClose?: (isOpen: boolean) => void; 
  variant?: "small" | "large";
  children?: ReactNode;
  backdropClassName?: string;
  backdrop?: any;
  crossBtn?: boolean;
}
const CommonModal = (props: CommonModals) => {
  const handleClose = () => {
    if (props.onClose) {
      props.onClose(false); // Call onClose prop with false to close the modal
    }
  };
  return (
    <>
      <Modal
        show={props.show}
        // onHide={props.onHide}
        onHide={handleClose} 
        centered
        // backdropClassName={props.backdropClassName}
        className={`${props.className} commonModal`}
        // backdrop={props?.backdrop}
      >
        {props.heading && (
          <Modal.Header>
            <Modal.Title>
              <h4>{props.heading}</h4>
            </Modal.Title>
            {props.crossBtn && (
              <button onClick={handleClose} className="modal_close_btn">
                <img src={closeIcon} alt="close-icon" />
              </button>
            )}
          </Modal.Header>
        )}
        <Modal.Body>{props?.children}</Modal.Body>
      </Modal>
    </>
  );
};

export default CommonModal;
