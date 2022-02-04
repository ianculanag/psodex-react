import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const AccountContainer = () => {
    return <div className="my-sm-4 mx-sm-5 m-3">
        <Row className="g-4">

            {/* Card Component Loop */}
            <Col lg="4" md="6" s xs="12">
                <Card border="light" className="shadow">
                    <Card.Body className="p-4">
                        <div className="row">
                            <div className="col-6">
                                <p className="card-subtitle mb-1 fw-bold text-nowrap ">Yondu Payroll</p>
                                <h6 className="card-subtitle mb-2 text-black-50">2929570622</h6>
                                <small className="text-black-50 fs-6">BPI</small>
                            </div>
                            <div className="col-6 d-flex text-end align-items-end flex-row-reverse text-nowrap ">
                                <div className="align-text-bottom">
                                    <small className="d-inline me-1">PHP</small>
                                    <h4 className="mb-1 d-inline peso-format fw-bold">106,210</h4><small className="decimal-value fw-bold">.12</small>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            {/* Card Component Loop */}
            <Col lg="4" md="6" s xs="12">
                <Card border="light" className="shadow">
                    <Card.Body className="p-4">
                        <div className="row">
                            <div className="col-6">
                                <p className="card-subtitle mb-1 fw-bold text-nowrap ">GCash Personal</p>
                                <h6 className="card-subtitle mb-2 text-black-50">639693125908</h6>
                                <small className="text-black-50 fs-6">GCash</small>
                            </div>
                            <div className="col-6 d-flex text-end align-items-end flex-row-reverse text-nowrap ">
                                <div className="align-text-bottom">
                                    <small className="d-inline me-1">PHP</small>
                                    <h4 className="mb-1 d-inline peso-format fw-bold">8,425</h4><small className="decimal-value fw-bold">.50</small>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            {/* Card Component Loop */}
            <Col lg="4" md="6" s xs="12">
                <Card border="light" className="shadow">
                    <Card.Body className="p-4">
                        <div className="row">
                            <div className="col-6">
                                <p className="card-subtitle mb-1 fw-bold text-nowrap ">CC Mastercard</p>
                                <h6 className="card-subtitle mb-2 text-black-50">5423 3989 0404 9513</h6>
                                <small className="text-black-50 fs-6">UnionBank</small>
                            </div>
                            <div className="col-6 d-flex text-end align-items-end flex-row-reverse text-nowrap ">
                                <div className="align-text-bottom">
                                    <small className="d-inline me-1">PHP</small>
                                    <h4 className="mb-1 d-inline peso-format fw-bold">14,990</h4><small className="decimal-value fw-bold">.37</small>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>



    </div>;
};

export default AccountContainer;
