import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TransactionPreview = (props) => {
    var date = new Date(props.date);
    var month = date.toLocaleDateString('en-us', { month: 'short' });
    var day = date.toLocaleDateString('en-us', { day: 'numeric' });
    var weekday = date.toLocaleDateString('en-us', { weekday: 'short' });
    var type = props.type.charAt(0).toUpperCase() + props.type.slice(1).toLowerCase();

    return <Row className="d-flex align-text-top pb-4">
        <Col lg="12" xl="6" className="text-nowrap mb-0 pt-1">
            <Row>
                <Col xs="2">
                    <div className="h6 mb-0 text-center">{weekday}</div>
                    <div className="h6 mb-0 text-center text-muted">{month}</div>
                    <div className="h6 text-center text-muted">{day}</div>
                </Col>
                <Col xs="10">
                    <div className="d-flex align-items-stretch">
                        <p className="card-subtitle mb-1 fw-bold text-truncate">{props.details}</p>
                        <div className="dot me-3 px-0 mx-2" style={{ marginTop: '.1em', backgroundColor: props.color }}></div>
                    </div>
                    <h6 className="card-subtitle mb-2 text-black-50">{type}</h6>
                </Col>
            </Row>

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
