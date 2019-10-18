import React from 'react';

const List = (props) => {
    return (
        <ul className="list-group">
            {props.children}
        </ul>
    );
};

export default List;