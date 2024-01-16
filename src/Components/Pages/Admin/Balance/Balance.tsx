import { Col, Container, Row } from 'react-bootstrap';
import BalanceBlock from './BalanceBlock/BalanceBlock';
import DollarIcon from '../../../../Assets/Images/DollarIcon.png';
import LockIcon from "../../../../Assets/Images/LockIcon.png";
import CurrencyIcon from '../../../../Assets/Images/CurrencyIcon.png';
import "./Balance.scss"
import CustomTable from '../../../Common/Table/Index';
import ButtonCustom from '../../../Common/Button/ButtonCustom';

const Balance = () => {

    const data = [
        {
            balanceImg: DollarIcon,
            balanceTitle: "Total Balance",
            balanceAmount: "$10,000",
        },
        {
            balanceImg: LockIcon,
            balanceTitle: "Blocked Balance",
            balanceAmount: "$9,0000",
        },
        {
            balanceImg: CurrencyIcon,
            balanceTitle: "Available Balance",
            balanceAmount: "$8,0000",
        },
    ]

    const fields = ["Sr No", "Hash", "Type", "Time& Date", "Payment ID"];

    const claim = [
        {
            sr: "01",
            hash: "0x73hdjxnsjsj383898w9w9xmxms930",
            token: "0.00",
            claimToken: "0.00",
        },
        {
            sr: "01",
            hash: "0x73hdjxnsjsj383898w9w9xmxms930",
            token: "0.00",
            claimToken: "0.00",
        },
        {
            sr: "01",
            hash: "0x73hdjxnsjsj383898w9w9xmxms930",
            token: "0.00",
            claimToken: "0.00",
        },
        {
            sr: "01",
            hash: "0x73hdjxnsjsj383898w9w9xmxms930",
            token: "0.00",
            claimToken: "0.00",
        },
        {
            sr: "01",
            hash: "0x73hdjxnsjsj383898w9w9xmxms930",
            token: "0.00",
            claimToken: "0.00",
        },
    ];

    return (
        <>
            <section className='balance_sec'>
                <Container fluid>
                    <Row>
                        {data.map((item, index) => (
                            < Col lg={4} key={index} >
                                <BalanceBlock balanceImg={item.balanceImg} balanceTitle={item.balanceTitle} balanceAmount={item.balanceAmount} />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col>
                            <CustomTable fields={fields} sortbuttons={true}
                                children={claim?.map((item: any, index: number) => (
                                    <tr key={index}>
                                        <td>{item.sr}</td>
                                        <td className="text-start">{item.hash}</td>
                                        <td className="text-start">{item.type}</td>
                                        <td className='text-start'>
                                            {item.time}
                                        </td>
                                    </tr>
                                ))}
                            />
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    );
};

export default Balance;