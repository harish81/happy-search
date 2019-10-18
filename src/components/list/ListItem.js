import React from 'react';

const ListItem = (props) => {
    return (
        <li className="list-group-item">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" />
                    <label className="custom-control-label" htmlFor="customCheck">
                        <img src="https://cdn.worldvectorlogo.com/logos/laravel.svg" className="rounded-circle" style={{width:'19px',marginRight:'4px'}} alt="logo" />
                        {props.children}
                    </label>
            </div>
        </li>
    );
};

export default ListItem;