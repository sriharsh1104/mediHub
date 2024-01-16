import React from 'react'
import './ProfileBio.scss'
import list_img from '../../../Assets/Images/profile-img.svg'
import pointImg from '../../../Assets/Images/point-img.jpg'
import social_img from '../../../Assets/Images/Icons/git-hub.svg'
import social_img2 from '../../../Assets/Images/Icons/linkndin.svg'
import social_img3 from '../../../Assets/Images/Icons/telegram.svg'
import { Link } from 'react-router-dom'
import ButtonCustom from '../Button/ButtonCustom'

const ProfileBio = () => {
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
        <div className='profileBio'>
            <div className='profileBio_header'>
                <div className='profileBio_header_info'>
                    <div className='list_image'>
                        <img src={list_img} alt="list-img" />
                    </div>
                    <div className='list_content'>
                        <h6>Marshall Mathers</h6>
                        <p className='user_email'>Marshallmathers119@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='profileBio_link'>
                <h6>Profile Bio</h6>
                <div className='profileBio_link_info'>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
            </div>
            <div className='profileBio_pointImg'>
                <img src={pointImg} alt="point-img" />
            </div>
            <div className='profileBio_link'>
                <h6>Social Accounts</h6>
                <div className='profileBio_link_info'>
                    <div className='profileBio_link_info_social'>
                        {socialdata.map((item) => {
                            return (
                                <div className='social_account'>
                                    <div className='social_img'>
                                        <img src={item.social_img} alt="social-img" />
                                    </div>
                                    <Link to="/" className={item.className}>{item.link}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <ButtonCustom
                title="Cancel"
                type="submit"
                className="bordered w-100"
                onClick="/"
            />
        </div>
    )
}

export default ProfileBio
