import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import axios from 'axios';

import JarPill from './JarPill';

class JarDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jars: []
        };
    }

    componentDidMount() {
        this.findAllJars();
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
            <Col id="jarContainer" lg="4" xl="4">
                {this.state.jars.map((jar =>
                    <JarPill
                        id={jar.jarId}
                        balance={jar.availableBalance}
                        color={jar.jarColor}
                        name={jar.jarName}>
                    </JarPill>
                ))
                }
            </Col>
        );
    }
}

const mapStateToProps = state => {
    return {
        jarObject: state.jar
    };
};

export default connect(mapStateToProps)(JarDashboard);