import {
  ArrowNextIcon,
  ArrowPrevIcon,
} from "../../../Assets/Images/Icons/SvgIcons";
import "./CustomPagination.scss";

const CustomPagination = (props: { className: string }) => {
  return (
    <div className="custom-pagination">
      <ul className={props?.className}>
        <li>
          <div className="custom-pagination__arrows">

            <span>
              <ArrowPrevIcon />
            </span>
          </div>
        </li>
        <li className="custom-pagination__no">
          <span>1</span>
        </li>
        <li className="custom-pagination__no">
          <span>2</span>
        </li>
        <li className="custom-pagination__no">
          <span>3</span>
        </li>
        <li className="custom-pagination__no">
          <span>4</span>
        </li>
        <li>
          <div className="custom-pagination__arrows">
            <span>
              <ArrowNextIcon />
            </span>

          </div>
        </li>
      </ul>
    </div>
  );
};

export default CustomPagination;
