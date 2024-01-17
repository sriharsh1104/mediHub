import "./ProfileBio.scss";
import list_img from "../../../Assets/Images/profile-img.svg";
import pointImg from "../../../Assets/Images/point-img.jpg";
import social_img from "../../../Assets/Images/Icons/git-hub.svg";
import social_img2 from "../../../Assets/Images/Icons/linkndin.svg";
import social_img3 from "../../../Assets/Images/Icons/telegram.svg";
import { Link } from "react-router-dom";
import ButtonCustom from "../Button/ButtonCustom";
import { useSelector } from "react-redux";

const ProfileBio = () => {
  const userData: any = useSelector((state: any) => state?.user?.companyData);

  const socialdata = [
    {
      social_img: social_img,
      link: "Git Hub",
      className: "blue1",
    },
    {
      social_img: social_img2,
      link: "Linked In",
      className: "blue2",
    },
    {
      social_img: social_img3,
      link: "Telegram",
      className: "blue3",
    },
  ];
  return (
    <div className="profileBio">
      <div className="profileBio_header">
        <div className="profileBio_header_info">
          <div className="list_image">
            <img src={list_img} alt="list-img" />
          </div>
          <div className="list_content">
            <h6>{userData?.companyName}</h6>
            <p className="user_email">{userData?.email}</p>
          </div>
        </div>
      </div>
      <div className="profileBio_link">
        <h6>Profile Bio</h6>
        <div className="profileBio_link_info">
          <p>{userData?.bio}</p>
        </div>
      </div>
      <div className="profileBio_link">
        <h6>Office Address</h6>
        <div className="profileBio_link_info">{userData?.address}</div>
      </div>
      <div className="profileBio_link">
        <h6>Country</h6>
        <div className="profileBio_link_info">{userData?.country}</div>
      </div>
      <div className="profileBio_link">
        <h6>Pincode</h6>
        <div className="profileBio_link_info">{userData?.pincode}</div>
      </div>
      <div className="profileBio_link">
      <h6>Contact Number</h6>
        <div className="profileBio_link_info">{userData?.phoneNo}</div>
      </div>
      <div className="profileBio_link">
        <h6>Social Accounts</h6>
        <div className="profileBio_link_info">
          <div className="profileBio_link_info_social">
            {socialdata?.map((item) => {
              return (
                <div className="social_account">
                  <div className="social_img">
                    <img src={item.social_img} alt="social-img" />
                  </div>
                  <Link to="/" className={item.className}>
                    {item.link}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <ButtonCustom
                title="Cancel"
                type="submit"
                className="bordered w-100"
                onClick="/"
            /> */}
    </div>
  );
};

export default ProfileBio;
