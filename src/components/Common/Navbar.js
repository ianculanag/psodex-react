import React from 'react';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

const Navbar = () => {
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
            <img className="avatar rounded-circle" src="https://lh3.googleusercontent.com/a-/AOh14Gj6i77q_zOAKx0WahOZmBujTWrtBZFFOt4f6z35_w=s288-p-rw-no" alt="profile-pic" />
          </div>
        </li>
      </ul>
    </div>
  </div>;
};

export default Navbar;
