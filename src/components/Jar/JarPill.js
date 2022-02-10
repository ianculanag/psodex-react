import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const JarPill = (props) => {
    return (
        <Card className="rounded-pill shadow mb-4" border="light" key={props.id}>
            <Card.Body>
                <Row className="px-3 d-flex align-items-center">
                    <Col xs="1">
                        <div className="dot me-3 px-0 mx-0" style={{ backgroundColor: props.color }}></div>
                    </Col>
                    <Col xs="10">
                        <div className="mb-0 pb-0 pt-2">
                            <small className="d-inline me-1">PHP</small>
                            <h5 className="d-inline fw-bolder">{props.balance.split('.')[0]}</h5><small className="decimal-value fw-bolder">.{props.balance.split('.')[1]}</small>
                        </div>
                        <div className="py-0 my-0">
                            <h6 className="text-black-50">{props.name}</h6><i className="fas fa-clipboard-check"></i>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default JarPill;