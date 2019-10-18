import React from 'react';
import logo from "../logo.png";

const Logo = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <img src={logo} alt="logo" className="img-fluid"
                 style={{width: '9rem', marginTop: '3.7rem'}}/>
        </div>
    );
};

export default Logo;