import React, { ReactNode } from 'react'
import { Form } from 'react-bootstrap'

type propTypes = {
    label?: string | ReactNode,
    rows?: number,
    id?: string,
    className?: string,
    onChange?: any,
    name?: any,
    placeholder?: string,
    Dateclass?: string,
    value?: any,
}

const DatePicker = (props: propTypes) => {
    return (
        <>
            <Form.Group className={`customInput ${props.className}`} controlId={props.id}>
                {props.label && <Form.Label>{props.label}</Form.Label>}
                <Form.Control
                    type="date"
                    placeholder={props.placeholder}
                    className={props.Dateclass}
                    name={props.name} 
                    onChange={props.onChange}
                    value={props.value}
                />
            </Form.Group>
        </>
    )
}

export default DatePicker
