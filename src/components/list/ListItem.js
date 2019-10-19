import React from 'react';

const ListItem = (props) => {
    return (
        <li className="list-group-item">
            <div className="custom-control custom-checkbox">
                <input onChange={event => props.updateSites(event, props.site.url)} type="checkbox"
                       className="custom-control-input" id={props.site.name + "_check"}
                       checked={props.checked}
                       name={props.site.name + "_check"}/>
                <label className="custom-control-label" htmlFor={props.site.name + "_check"}>
                    <img src={props.site.logo} className="rounded-circle" style={{width: '20px', marginRight: '4px'}}
                         alt="logo"/>
                    {props.children}
                </label>
            </div>
        </li>
    );
};

export default ListItem;