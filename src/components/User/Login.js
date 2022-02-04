import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

import { authenticateUser } from '../../services/index';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        email: '', password: ''
        //, error: ''
    }

    credentialChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    validateUser = () => {
        this.props.authenticateUser(this.state.email, this.state.password);
        setTimeout(() => {
            if (this.props.auth.isLoggedIn) {
                return this.props.history.push("/dashboard");
            } else {
                alert('invalid credentials');
                this.resetLoginForm();
                //this.setState({ "error": "Invalid email and password" });
            }
        }, 3000);
    }
    
    resetLoginForm = () => {
        this.setState(() => this.inititalState);
    };


    render() {
        const { email, password, 
            //error 
        } = this.state;

        return (
            <Container className="py-4 bg-gray-100 vh-100">
                <Row className="h-100 align-items-center">
                    <Col xs="12" lg="6">
                        <Card className="shadow">
                            <Card.Body className="p-lg-5 p-4">
                                <h4 className="card-title mb-4 fw-bold">Good to see you back! <span role="img" aria-label="wave">👋</span></h4>
                                <p className="text-muted small mb-5">Login to your account to record your expenses, savings, and investments all in one place.</p>
                                <Form>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="Email address" required autoComplete="off" name="email" value={email} onChange={this.credentialChange}/>
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required autoComplete="off" name="password" value={password} onChange={this.credentialChange}/>
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="agree" id="agree" />
                                        <label className="form-check-label" htmlFor="agree">Remember me</label>
                                    </div>
                                    <Button className="mt-4 text-light" size="lg" type="button" variant="primary" onClick={this.validateUser}>Login
                                    </Button>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="px-lg-5 py-lg-4 p-4">
                                <div className="small text-muted">Don't have an account? <a href="/register">Register</a>.</div>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col xs="12" lg="6" className="ms-xl-auto px-lg-4 text-center text-primary">
                        <img className="img-fluid mb-4" width="300" src="https://d19m59y37dris4.cloudfront.net/bubbly/1-2/img/drawkit-illustration.svg" alt="" style={{ transform: 'rotate(10deg)' }} />
                        <h1 className="mb-4 fw-bold">Start taking full <br className="d-none d-lg-inline" />control of your money</h1>
                        <p className="text-muted">"It's not about how much money you make, but how much money you can keep." - some rich dude in a money seminar.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: (email, password) => dispatch(authenticateUser(email, password))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);