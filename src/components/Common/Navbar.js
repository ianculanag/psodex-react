import React, {Component} from 'react';
import {connect} from 'react-redux';

import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Link } from 'react-router-dom';

import {logoutUser} from '../../services/index';

class NavBar extends Component {
  logout = () => {
      this.props.logoutUser();
  }

  render() {
  return <div className="d-flex w-100 px-4 py-3 align-items-center" style={{ height: '4em' }}>
    <a className="navbar-brand" href="/dashboard"><span className="logo">psodex</span></a>
    <div className="d-flex w-100 justify-content-end ">
      <ul className="nav d-flex align-items-center">
        <li className="nav-item m-2">
          <div className="text-muted">
            <AppsOutlinedIcon></AppsOutlinedIcon>
          </div>
        </li>
        <li className="nav-item m-2">
          <div className="">
          <Link to={"logout"} className="nav-link" onClick={this.logout}>
            <img className="avatar rounded-circle" src="https://media-exp1.licdn.com/dms/image/C5603AQEX9Ye4cYFZsg/profile-displayphoto-shrink_800_800/0/1638815039223?e=1649894400&v=beta&t=bVRM0STQW5FnM7P3onSAe8FQn-sTzu8bOqWrsfVNBlo" alt="profile-pic" />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </div>;
  };
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
