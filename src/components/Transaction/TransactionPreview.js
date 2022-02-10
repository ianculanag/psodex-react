import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TransactionPreview = (props) => {
    var transactionDate = new Date(props.date).toLocaleDateString('en-us',
        {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'utc'
        });


    return <Row className="d-flex align-text-top pb-4">
        <Col lg="12" xl="6" className="text-nowrap mb-0 pt-1">
            <div className="d-flex align-items-stretch">
                <p className="card-subtitle mb-1 fw-bold text-truncate">{props.details}</p>
                <div className="dot me-3 px-0 mx-2" style={{ marginTop: '.1em', backgroundColor: props.color }}></div>
            </div>
            <h6 className="card-subtitle mb-2 text-black-50">{transactionDate}</h6>
        </Col>
        <Col lg="12" xl="6" className="d-flex flex-row-reverse">
            {props.inboundAccountId !== "" ?
                <Col xs="6" sm="6" md="6" lg="6" xl="6" className="text-end text-nowrap">
                    <small className="d-inline me-1">PHP</small>
                    <h5 className="d-inline peso-format small-currency fw-bolder">{props.amount.split('.')[0]}</h5><small className="decimal-value fw-bolder">.{props.amount.split('.')[1]}</small>
                    <h6 className="card-subtitle text-black-50">{props.inboundAccountName}</h6>
                </Col>
                : null}
            {props.outboundAccountId !== "" ?
                <Col xs="6" sm="6" md="6" lg="6" xl="6" className="text-end text-nowrap">
                    (<small className="d-inline me-1">PHP</small>
                    <h5 className="d-inline peso-format small-currency fw-bolder">{props.amount.split('.')[0]}</h5><small className="decimal-value fw-bolder">.{props.amount.split('.')[1]}</small>)
                    <h6 className="card-subtitle text-black-50">{props.outboundAccountName}</h6>
                </Col>
                : null}
        </Col>
    </Row>;
};

export default TransactionPreview;
