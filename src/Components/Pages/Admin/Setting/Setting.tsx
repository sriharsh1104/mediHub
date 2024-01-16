import React from 'react'
import './Setting.scss'
import { Col, Row, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonCustom from '../../../Common/Button/ButtonCustom'
import InputCustom from '../../../Common/Inputs/InputCustom'
import list_img from '../../../../Assets/Images/profile-img.svg'
import upload_img from '../../../../Assets/Images/upload-img.svg'
import social_img from '../../../../Assets/Images/Icons/git-hub.svg'
import social_img2 from '../../../../Assets/Images/Icons/linkndin.svg'
import social_img3 from '../../../../Assets/Images/Icons/telegram.svg'
import TextArea from '../../../Common/FormInputs/TextArea'

const Setting = () => {
    return (
        <section className="Setting">
            <div className='Setting_box'>
                <div className='Setting_box_header'>
                    <div className='Setting_box_header_info'>
                        <div className='list_image'>
                            <img src={list_img} alt="list-img" />
                            <div className="upload_img">
                                <img src={upload_img} alt="upload-img" />
                            </div>
                        </div>
                        <div className='list_content'>
                            <h6>Marshall Mathers</h6>
                            <p className='user_email'>Marshallmathers119@gmail.com</p>
                        </div>
                    </div>
                </div>
                <Form>
                    <Form.Group className="Post_request_inputList">
                        <Row>
                            <Col xl={4}>
                                <InputCustom
                                    type="input"
                                    label="First Name"
                                    placeholder="Marshall"
                                    Fstar="*"
                                    infoclass="d-none"
                                    step={"any"}
                                    name="amount"
                                    autoFocus={true}
                                    required
                                    min={0}
                                    maxlength={10}
                                >
                                </InputCustom>
                            </Col>
                            <Col xl={4}>
                                <InputCustom
                                    type="input"
                                    label="Last Name"
                                    placeholder="Mathers"
                                    Fstar="*"
                                    infoclass="d-none"
                                    step={"any"}
                                    name="amount"
                                    autoFocus={true}
                                    required
                                    min={0}
                                    maxlength={10}
                                >
                                </InputCustom>
                            </Col>
                            <Col xl={4}>
                                <InputCustom
                                    type="input"
                                    label="Email"
                                    placeholder="marshallmathers119@gmail.com"
                                    Fstar="*"
                                    infoclass="d-none"
                                    step={"any"}
                                    name="amount"
                                    autoFocus={true}
                                    required
                                    min={0}
                                    maxlength={10}
                                >
                                </InputCustom>
                            </Col>
                            <Col xl={4}>
                                <Form.Label>
                                    Audit Types
                                </Form.Label>
                                <div className='social_account'>
                                    <div className='social_links'>
                                        <div className='social_img'>
                                            <img src={social_img} alt="social-img" />
                                        </div>
                                        <Link to="/">Git Hub</Link>
                                    </div>
                                    <InputCustom
                                        type="input"
                                        InputName="post_input"
                                        placeholder="Github.com/koteq/4153240545455444"
                                        Fstar="*"
                                        infoclass="d-none"
                                        step={"any"}
                                        name="amount"
                                        autoFocus={true}
                                        required
                                        min={0}
                                        maxlength={10}
                                    >
                                    </InputCustom>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <Form.Label>
                                    Audit Types
                                </Form.Label>
                                <div className='social_account'>
                                    <div className='social_links'>
                                        <div className='social_img'>
                                            <img src={social_img2} alt="social-img" />
                                        </div>
                                        <Link to="/" className='linkedin_link'>Git Hub</Link>
                                    </div>
                                    <InputCustom
                                        type="input"
                                        InputName="post_input blue2"
                                        placeholder="Linked In.com/koteq/4153240545455"
                                        Fstar="*"
                                        infoclass="d-none"
                                        step={"any"}
                                        name="amount"
                                        autoFocus={true}
                                        required
                                        min={0}
                                        maxlength={10}
                                    >
                                    </InputCustom>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <Form.Label>
                                    Audit Types
                                </Form.Label>
                                <div className='social_account'>
                                    <div className='social_links'>
                                        <div className='social_img'>
                                            <img src={social_img3} alt="social-img" />
                                        </div>
                                        <Link to="/" className='telegram_link'>Git Hub</Link>
                                    </div>
                                    <InputCustom
                                        type="input"
                                        InputName="post_input blue3"
                                        placeholder="Telegram.com/koteq/4153240545455"
                                        Fstar="*"
                                        infoclass="d-none"
                                        step={"any"}
                                        name="amount"
                                        autoFocus={true}
                                        required
                                        min={0}
                                        maxlength={10}
                                    >
                                    </InputCustom>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <Form.Label>
                                    Audit Types
                                </Form.Label>
                                <div className='social_account'>
                                    <div className='social_links'>
                                        <div className='social_img'>
                                            <img src={social_img3} alt="social-img" />
                                        </div>
                                        <Link to="/" className='telegram_link'>Git Hub</Link>
                                    </div>
                                    <InputCustom
                                        type="input"
                                        InputName="post_input blue3"
                                        placeholder="Telegram.com/koteq/4153240545455"
                                        Fstar="*"
                                        infoclass="d-none"
                                        step={"any"}
                                        name="amount"
                                        autoFocus={true}
                                        required
                                        min={0}
                                        maxlength={10}
                                    >
                                    </InputCustom>
                                </div>
                            </Col>
                            <Row className='p-0 m-0'>
                                <Col xl={4}>
                                    <TextArea
                                        label="Profile Bio"
                                        // className="textarea"
                                        placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                                    />
                                    {/* <div className='profileBio_link'>
                                    <h6>Profile Bio</h6>
                                    <div className='profileBio_link_info'>
                                        <p>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        </p>
                                    </div>
                                </div> */}
                                </Col>
                            </Row>
                            <Col xl={12}>
                                <ButtonCustom
                                    title="Update"
                                    type="submit"
                                // className="confirm_btn"
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        </section>
    )
}

export default Setting
