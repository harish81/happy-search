import React from 'react';

const ButtonBar = (props) => {
    return (
        <div className="d-flex justify-content-center" style={{marginTop: '2rem'}}>
            <button className="btn btn-primary" type="button" onClick={props.onSearch}>Happy Search</button>
            <button className="btn btn-outline-light ml-3" type="button"
                    onClick={event => {
                        let settingBox = window.jQuery(".settings-box");
                        if(settingBox.is(":hidden")) {
                            settingBox.fadeIn();
                        }else{
                            settingBox.fadeOut();
                        }
                    }}
            >Advanced Settings
            </button>
        </div>
    );
};

export default ButtonBar;