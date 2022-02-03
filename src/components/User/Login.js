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
                //return this.props.history.push("/");
                alert('logged in');
            } else {
                alert('invalid credentials');
                // this.resetLoginForm();
                // this.setState({ "error": "Invalid email and password" });
            }
        }, 500);
    }

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
                                <p class="text-muted small mb-5">Login to your account to record your expenses, savings, and investments all in one place.</p>
                                <Form>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="Email address" required autoComplete="off" name="email" value={email} onChange={this.credentialChange}/>
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required autoComplete="off" name="password" value={password} onChange={this.credentialChange}/>
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="agree" id="agree" />
                                        <label class="form-check-label" for="agree">Remember me</label>
                                    </div>
                                    <Button className="mt-4" size="lg" type="button" variant="primary" onClick={this.validateUser}>Login
                                    </Button>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="px-lg-5 py-lg-4 p-4">
                                <div class="small text-muted">Don't have an account? <a href="/register">Register</a>.</div>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col xs="12" lg="6" className="ms-xl-auto px-lg-4 text-center text-primary">
                        <img class="img-fluid mb-4" width="300" src="https://d19m59y37dris4.cloudfront.net/bubbly/1-2/img/drawkit-illustration.svg" alt="" style={{ transform: 'rotate(10deg)' }} />
                        <h1 class="mb-4 fw-bold">Start taking full <br class="d-none d-lg-inline" />control of your money</h1>
                        <p class="text-muted">"It's not about how much money you make, but how much money you can keep." - some rich dude in a money seminar.</p>
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