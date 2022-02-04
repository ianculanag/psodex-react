import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const TransactionContainer = () => {
    return <div className="my-sm-4 mx-sm-5 m-5 pt-5">
        <Row className="g-4">
            <Col id="transactionContainer" lg="7" xl="7">
                <Card border="light" className="shadow">
                    <Card.Header className="p-4 bg-white shadow-sm small text-muted">
                        TRANSACTION HISTORY
                    </Card.Header>
                    <Card.Body className="p-4">
                        <Row>

                            {/* Transaction Component Loop */}
                            <Col lg="12" xl="6" className="mb-3">
                                <div className="d-flex align-items-stretch">
                                    <p className="card-subtitle mb-1 fw-bold">Buffalo Wings N' Things dinner</p>
                                    <div class="dot me-3 bg-indigo px-0 mx-2" style={{ 'margin-top': '.1em' }}></div>
                                </div>
                                <h6 className="card-subtitle mb-2 text-black-50">Thursday, Feb. 3, 2022</h6>
                            </Col>
                            <Col xs sm md lg="6" xl="3" className="text-sm-end text-nowrap ">
                                <div className="align-text-bottom">
                                    <small className="d-inline me-1"></small>
                                    <h5 className="mb-1 d-inline peso-format fw-bold">-</h5><small className="decimal-value fw-bold"></small>
                                    <h6 className="card-subtitle mb-2 text-black-50">&nbsp;</h6>
                                </div>
                            </Col>
                            <Col xs sm md lg="6" xl="3" className="text-sm-end text-nowrap ">
                                <div className="align-text-bottom">

                                    (<small className="d-inline me-1">PHP</small>
                                    <h5 className="mb-1 d-inline peso-format fw-bold">472</h5><small className="decimal-value fw-bold">.00</small>)
                                    <h6 className="card-subtitle mb-2 text-black-50">GCash Personal</h6>
                                </div>
                            </Col>

                            {/* Transaction Component Loop */}
                            <Col lg="12" xl="6" className="mb-3">
                                <p className="card-subtitle mb-1 fw-bold">Cash in for dinnner</p>
                                <h6 className="card-subtitle mb-2 text-black-50">Thursday, Feb. 3, 2022</h6>
                            </Col>
                            <Col xs sm md lg="6" xl="3" className="text-sm-end text-nowrap ">
                                <div className="align-text-bottom">
                                    <small className="d-inline me-1">PHP</small>
                                    <h5 className="mb-1 d-inline peso-format fw-bold">500</h5><small className="decimal-value fw-bold">.00</small>
                                    <h6 className="card-subtitle mb-2 text-black-50">GCash Personal</h6>
                                </div>
                            </Col>
                            <Col xs sm md lg="6" xl="3" className="text-sm-end text-nowrap ">
                                <div className="align-text-bottom">
                                    (<small className="d-inline me-1">PHP</small>
                                    <h5 className="mb-1 d-inline peso-format fw-bold">500</h5><small className="decimal-value fw-bold">.00</small>)
                                    <h6 className="card-subtitle mb-2 text-black-50">Yondu Payroll</h6>
                                </div>
                            </Col>

                            {/* Transaction Component Loop */}
                            <Col lg="12" xl="6" className="mb-3 text-nowrap">
                                <div className="d-flex align-items-stretch">
                                    <p className="card-subtitle mb-1 fw-bold">MP2 contribution period Feb-March</p>
                                    <div class="dot me-3 bg-green px-0 mx-2" style={{ 'margin-top': '.1em' }}></div>
                                </div>
                                <h6 className="card-subtitle mb-2 text-black-50">Wednesday, Feb. 2, 2022</h6>
                            </Col>
                            <Col xs sm md lg="6" xl="3" className="text-sm-end text-nowrap ">
                                <div className="align-text-bottom">
                                    <small className="d-inline me-1"></small>
                                    <h5 className="mb-1 d-inline peso-format fw-bold">-</h5><small className="decimal-value fw-bold"></small>
                                    <h6 className="card-subtitle mb-2 text-black-50">&nbsp;</h6>
                                </div>
                            </Col>
                            <Col xs sm md lg="6" xl="3" className="text-sm-end text-nowrap ">
                                <div className="align-text-bottom">
                                    (<small className="d-inline me-1">PHP</small>
                                    <h5 className="mb-1 d-inline peso-format fw-bold">12,000</h5><small className="decimal-value fw-bold">.00</small>)
                                    <h6 className="card-subtitle mb-2 text-black-50">Yondu Payroll</h6>
                                </div>
                            </Col>

                            {/* Transaction Component Loop */}
                            <Col lg="12" xl="6" className="mb-3">
                                <p className="card-subtitle mb-1 fw-bold">Yondu Payout Jan. 1-14</p>
                                <h6 className="card-subtitle mb-2 text-black-50">Monday, Jan. 31, 2022</h6>
                            </Col>
                            <Col xs sm md lg="6" xl="3" className="text-sm-end text-nowrap ">
                                <div className="align-text-bottom">
                                    <small className="d-inline me-1">PHP</small>
                                    <h5 className="mb-1 d-inline peso-format fw-bold">48,734</h5><small className="decimal-value fw-bold">.55</small>
                                    <h6 className="card-subtitle mb-2 text-black-50">Yondu Payroll</h6>
                                </div>
                            </Col>
                            <Col xs sm md lg="6" xl="3" className="text-sm-end text-nowrap ">
                                <div className="align-text-bottom">
                                    <small className="d-inline me-1"></small>
                                    <h5 className="mb-1 d-inline peso-format fw-bold">-</h5><small className="decimal-value fw-bold"></small>
                                    <h6 className="card-subtitle mb-2 text-black-50">&nbsp;</h6>
                                </div>
                            </Col>

                            {/* Head to transaction page after 5-10 records */}
                            <Col xs="12" className="text-center">
                                <a className="text-decoration-none" href="/"><small className="nounderline">View all transactions</small></a>
                            </Col>

                        </Row>

                    </Card.Body>
                </Card>
            </Col>

            <Col id="jarContainer" lg="5" xl="5">

                <Card className="rounded-pill shadow mb-4" border="light">
                    <Card.Body>
                        <Row className="px-3 d-flex align-items-center">
                            <Col xs="1">
                                <div class="dot me-3 bg-indigo px-0 mx-0"></div>
                            </Col>
                            <Col xs="11">
                                <div className="mb-0 pb-0 pt-2">
                                    <small class="d-inline me-1">PHP</small>
                                    <h5 class="d-inline fw-bold">28,321</h5><small class="decimal-value fw-bold">.84</small>
                                </div>
                                <div className="py-0 my-0">
                                    <h6 class="text-black-50">Necessities</h6><i class="fas fa-clipboard-check"></i>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    </div>;
};

export default TransactionContainer;
