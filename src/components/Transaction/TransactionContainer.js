import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import axios from 'axios';

class TransactionContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            jars: []
        };
    }

    componentDidMount() {
        this.findAllTransactions();
        this.findAllJars();
    }

    findAllTransactions() {
        axios.get("http://localhost:3030/transactions")
            .then(response => response.data)
            .then((data) => {
                this.setState({ transactions: data });
            });
    }

    findAllJars() {
        axios.get("http://localhost:3030/jars")
            .then(response => response.data)
            .then((data) => {
                this.setState({ jars: data });
            });
    }

    render() {
        return (
            <div className="my-sm-4 mx-sm-5 m-5 pt-5">
                <Row className="g-4">
                    <Col id="transactionContainer" lg="7" xl="7">
                        <Card border="light" className="shadow">
                            <Card.Header className="p-4 bg-white shadow-sm small text-muted">
                                TRANSACTION HISTORY
                            </Card.Header>
                            <Card.Body className="p-4">
                                <Row>

                                    {this.state.transactions.map((transaction =>
                                        <div className="d-flex align-items-stretch" key={transaction.transactionId}>
                                            <Col lg="12" xl="6" className="mb-3 text-nowrap">
                                                <div className="d-flex align-items-stretch">
                                                    <p className="card-subtitle mb-1 fw-bold">{transaction.details}</p>
                                                    <div className="dot me-3 px-0 mx-2" style={{ marginTop: '.1em', backgroundColor: transaction.jarColor}}></div>
                                                </div>
                                                <h6 className="card-subtitle mb-2 text-black-50">{transaction.transactionDate}</h6>
                                            </Col>
                                            <Col xs sm md lg="6" xl="3" className="text-sm-end text-nowrap ">
                                                <div className="align-text-bottom">
                                                    <small className="d-inline me-1">{transaction.inboundAccountId === "" ? '' : 'PHP'}</small>
                                                    <h5 className="mb-1 d-inline peso-format fw-bold">{transaction.inboundAccountId === "" ? '-' : transaction.transactionAmount.split('.')[0]}</h5><small className="decimal-value fw-bold">{transaction.inboundAccountId === "" ? '' : '.' + transaction.transactionAmount.split('.')[1]}</small>
                                                    <h6 className="card-subtitle mb-2 text-black-50">{transaction.inboundAccountId === "" ? '\u00A0' : transaction.inboundAccountName}</h6>
                                                </div>
                                            </Col>
                                            <Col xs sm md lg="6" xl="3" className="text-sm-end text-nowrap ">
                                                <div className="align-text-bottom">
                                                    <small className="d-inline me-1">{transaction.outboundAccountId === "" ? '' : 'PHP'}</small>
                                                    <h5 className="mb-1 d-inline peso-format fw-bold">{transaction.outboundAccountId === "" ? '-' : transaction.transactionAmount.split('.')[0]}</h5><small className="decimal-value fw-bold">{transaction.outboundAccountId === "" ? '' : '.' + transaction.transactionAmount.split('.')[1]}</small>
                                                    <h6 className="card-subtitle mb-2 text-black-50">{transaction.outboundAccountId === "" ? '\u00A0' : transaction.outboundAccountName}</h6>
                                                </div>
                                            </Col>
                                        </div>
                                    ))
                                    }

                                    {/* Head to transaction page after 5-10 records */}
                                    <Col xs="12" className="text-center">
                                        <a className="text-decoration-none" href="/"><small className="nounderline">View all transactions</small></a>
                                    </Col>

                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col id="jarContainer" lg="5" xl="5">
                        {this.state.jars.map((jar =>
                        <Card className="rounded-pill shadow mb-4" border="light" key={jar.jarId}>
                            <Card.Body>
                                <Row className="px-3 d-flex align-items-center">
                                    <Col xs="1">
                                        <div className="dot me-3 px-0 mx-0" style={{ backgroundColor: jar.jarColor}}></div>
                                    </Col>
                                    <Col xs="11">
                                        <div className="mb-0 pb-0 pt-2">
                                            <small className="d-inline me-1">PHP</small>
                                            <h5 className="d-inline fw-bold">{jar.availableBalance.split('.')[0]}</h5><small className="decimal-value fw-bold">.{jar.availableBalance.split('.')[1]}</small>
                                        </div>
                                        <div className="py-0 my-0">
                                            <h6 className="text-black-50">{jar.jarName}</h6><i className="fas fa-clipboard-check"></i>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        ))
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        transactionObject: state.transaction
    };
};

export default connect(mapStateToProps)(TransactionContainer);
