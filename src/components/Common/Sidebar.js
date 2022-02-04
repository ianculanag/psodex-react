import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const Sidebar = () => {
    return <div style={{ width: '6em' }} className="vh-100 shadow bg-white d-none d-sm-block">
        <ul className="list-group text-center d-flex h-100"  style={{ 'padding-top': '4em' }}>
            <li className="p-2 text-primary">
                <div><HomeOutlinedIcon fontSize="large"></HomeOutlinedIcon></div>
                <p className="fs-6 mb-1">Dashboard</p>
            </li>
            <li className="p-2 text-black-50">
                <div><ReceiptLongOutlinedIcon fontSize="large"></ReceiptLongOutlinedIcon></div>
                <p className="fs-6 mb-1">Transactions</p>
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
