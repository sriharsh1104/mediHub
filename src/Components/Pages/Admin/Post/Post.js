import React from 'react'
import { Container, Row, Form, Col } from 'react-bootstrap'
import './Post.scss'
import InputCustom from '../../../Common/Inputs/InputCustom'
// import DatePickerCustom from '../../../Common/DatePickerCustom/DatePickerCustom'
import DatePicker from '../../../Common/FormInputs/DatePicker/DatePicker'
import TextArea from '../../../Common/FormInputs/TextArea'
import ButtonCustom from '../../../Common/Button/ButtonCustom'
import Select from '../../../Common/Select/Select'

const Post = () => {
    const options = [
        {
            value:
                "Recently Listed",
            label: <><input type="checkbox" className='post_checkbox' />Smart Contract Audit</>
        },
        {
            value:
                "Recently Listed",
            label: <><input type="checkbox" className='post_checkbox' />Penetration Testing</>
        },
        {
            value:
                "Recently Listed",
            label: <><input type="checkbox" className='post_checkbox' />Performance Testing</>
        },
    ];
    return (
        <section className="Post">
            <div className='Post_request'>
                <h6>Fill in the Details</h6>
                <Form>
                    <Form.Group className="Post_request_inputList">
                        <Row>
                            <Col xl={6}>
                                <InputCustom
                                    type="input"
                                    label="Full name"
                                    InputName="post_input"
                                    placeholder="Enter Full name"
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
                            <Col xl={6}>
                                <InputCustom
                                    type="input"
                                    label="Email"
                                    InputName="post_input"
                                    placeholder="Enter Email Address"
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
                            <Col xl={6}>
                                <Form.Label>
                                    Audit Types
                                </Form.Label>
                                <Select
                                    options={options}
                                    defaultValue="Select Audit Types"
                                    className="select_option"
                                // menuIsOpen
                                />
                            </Col>
                            <Col xl={6}>
                                <InputCustom
                                    type="input"
                                    label="Git Hub URL"
                                    InputName="post_input"
                                    placeholder="www.auditbaazar.com"
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
                            <Col xl={6}>
                                <InputCustom
                                    type="input"
                                    label="Amount Required"
                                    InputName="post_input"
                                    placeholder="Enter Amount"
                                    Fstar="*"
                                    infoclass="d-none"
                                    step={"any"}
                                    name="amount"
                                    autoFocus={true}
                                    required
                                    min={0}
                                    maxlength={10}
                                    rightIcon={<><p>USD</p></>}
                                >
                                </InputCustom>
                            </Col>
                            <Col xl={6}>
                                <DatePicker
                                    label="Expected Timeline"
                                    Dateclass="post_input"
                                    placeholder="asdsa"
                                />
                            </Col>
                            <Col xl={6}>
                                <Form.Label>
                                    Expected Deliverables
                                </Form.Label>
                                <Select
                                    options={options}
                                    defaultValue="Select Audit Types"
                                    className="select_option"
                                // menuIsOpen
                                />
                            </Col>
                            <Col xl={12}>
                                <TextArea
                                    label="Description"
                                    placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when 
                                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
                                            letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop 
                                            publishing packages and web page It is a long established fact that a reader 
                                            will be distracted by the readable content of a page when looking."
                                />
                            </Col>
                            <Col xl={12}>
                                <ButtonCustom
                                    title="Confirm"
                                    type="submit"
                                    className="post_btn"
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
        </section>
    )
}

export default Post
