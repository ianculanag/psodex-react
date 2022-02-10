import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import axios from 'axios';

import TransactionPreview from './TransactionPreview';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

class TransactionDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        };
    }

    componentDidMount() {
        this.findAllTransactions();
    }

    findAllTransactions() {
        axios.get("http://localhost:3030/transactions")
            .then(response => response.data)
            .then((data) => {
                this.setState({ transactions: data });
            });
    }

    render() {
        return (
            <Col id="transactionContainer" lg="7" xl="7">
                <Card border="light" className="shadow">
                    <Card.Header className="p-4 bg-white shadow-sm small text-muted">
                        TRANSACTION HISTORY
                    </Card.Header>
                    <Card.Body className="p-4">
                        {this.state.transactions.map((transaction =>
                            <TransactionPreview
                                details={transaction.details}
                                color={transaction.jarColor}
                                date={transaction.transactionDate}
                                inboundAccountId={transaction.inboundAccountId}
                                outboundAccountId={transaction.outboundAccountId}
                                inboundAccountName={transaction.inboundAccountName}
                                outboundAccountName={transaction.outboundAccountName}
                                amount={transaction.transactionAmount}>
                            </TransactionPreview>
                        ))
                        }

                        {/* Head to transaction page after 5-10 records */}
                        <Row>
                            <Col xs="12" className="text-center">
                                <a className="text-decoration-none" href="/"><small className="nounderline">View all transactions</small><VisibilityOutlinedIcon className="ms-1" fontSize="small"></VisibilityOutlinedIcon></a>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

const mapStateToProps = state => {
    return {
        transactionObject: state.transaction
    };
};

export default connect(mapStateToProps)(TransactionDashboard);
