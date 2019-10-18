import React from 'react';
import * as Icons from 'react-feather';

const titleStyle = {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '.8rem',
    color: '#acacac',
    cursor: 'pointer'
};
const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="d-flex justify-content-between align-items-center"
                    style={titleStyle}
                    data-toggle="collapse"
                    href={"#collapse"+props.title}
                    role="button"
                    aria-expanded="false"
                    aria-controls={"collapse"+props.title}>
                    <span>{props.title}</span>
                    <Icons.ChevronDown/>
                </h5>
                <div className="collapse show" id={"collapse"+props.title}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Card;