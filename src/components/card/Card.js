import React from 'react';
import * as Icons from 'react-feather';

const titleStyle={
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#acacac',
    cursor: 'pointer'
};
const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="d-flex justify-content-between align-items-center" style={titleStyle} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <span>{props.title}</span>
                    <Icons.ChevronDown/>
                </h5>
                <p className="collapse show" id="collapseExample">
                    {props.children}
                </p>
            </div>
        </div>
    );
};

export default Card;