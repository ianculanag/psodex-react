import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deleteAccount } from '../../services/index';

import { Card, Row, Col } from 'react-bootstrap';

import axios from 'axios';

class AccountContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: []
        };
    }

    componentDidMount() {
        this.findAllAccounts();
    }

    findAllAccounts() {
        axios.get("http://localhost:3030/accounts")
            .then(response => response.data)
            .then((data) => {
                this.setState({ accounts: data });
            });
    }

    deleteAccount = (accountId) => {
        axios.delete("http://localhost:3030/accounts/" + accountId)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    this.setState({
                        accounts: this.state.accounts.filter(account => account.accountId !== accountId)
                    });
                } else {
                    this.setState({ "show": false });
                }
            });
    };

    render() {
        return (
            <div className="my-sm-4 mx-sm-5 m-3">
                <Row className="g-4">

                    {this.state.accounts.map((account =>
                        <Col lg="4" md="6" s xs="12" key={account.accountId}>
                            <Card border="light" className="shadow">
                                <Card.Body className="p-4">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="card-subtitle mb-1 fw-bold text-nowrap ">{account.accountName}</p>
                                            <h6 className="card-subtitle mb-2 text-black-50">{account.accountNumber}</h6>
                                            <small className="text-black-50 fs-6">{account.issuingBank == null ? '\u00A0' : account.issuingBank}</small>
                                        </div>
                                        <div className="col-6 d-flex text-end align-items-end flex-row-reverse text-nowrap ">
                                            <div className="align-text-bottom">
                                                <small className="d-inline me-1">PHP</small>
                                                <h4 className="mb-1 d-inline peso-format fw-bold">{account.balance.split('.')[0]}</h4><small className="decimal-value fw-bold">.{account.balance.split('.')[1]}</small>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        accountObject: state.account
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteAccount: (accountId) => dispatch(deleteAccount(accountId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);