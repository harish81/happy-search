import React from 'react';

const ButtonBar = (props) => {
    return (
        <div className="d-flex justify-content-center" style={{marginTop: '2rem'}}>
            <button className="btn btn-primary">Happy Search</button>
            <button className="btn btn-outline-light ml-3">Advanced Settings</button>
        </div>
    );
};

export default ButtonBar;