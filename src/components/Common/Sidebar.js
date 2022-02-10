import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return <div style={{ width: '6em' }} className="vh-100 shadow bg-white d-none d-sm-block sidebar">
        <ul className="list-group text-center d-flex h-100" style={{ paddingTop: '4em' }}>
            <li className="p-2">
                <NavLink exact to="/dashboard"
                    className={isActive =>
                        (isActive ? " text-primary" : "text-black-50")
                    } style={{ textDecoration: 'none' }}><div><HomeOutlinedIcon fontSize="large"></HomeOutlinedIcon></div>
                    <p className="fs-6 mb-1">Dashboard</p></NavLink>
            </li>
            <li className="p-2">
                <NavLink exact to="/add-transaction"
                    className={isActive =>
                        (isActive ? " text-primary" : "text-black-50")
                    } style={{ textDecoration: 'none' }}><div><ReceiptLongOutlinedIcon fontSize="large"></ReceiptLongOutlinedIcon></div>
                    <p className="fs-6 mb-1">Transactions</p></NavLink>
            </li>
            <li className="p-2 text-black-50">
                <div><AccountBalanceWalletOutlinedIcon fontSize="large"></AccountBalanceWalletOutlinedIcon></div>
                <p className="fs-6 mb-1">Accounts</p>
            </li>
            <li className="p-2 text-black-50">
                <div><SavingsOutlinedIcon fontSize="large"></SavingsOutlinedIcon></div>
                <p className="fs-6 mb-1">Jars</p>
            </li>
            <li className="p-2 text-black-50">
                <div><SettingsOutlinedIcon fontSize="large"></SettingsOutlinedIcon></div>
                <p className="fs-6 mb-1">Settings</p>
            </li>
        </ul>

    </div>;
};

export default Sidebar;
