import React from 'react';
import * as Icons from "react-feather";

const SearchBox = (props) => {
    return (
        <div className="d-flex justify-content-center" style={{marginTop: '3.2rem'}}>
            <div className="search-box d-flex">
                <Icons.Search style={{alignSelf: 'center', color: '#E0E0E0'}}/>
                <input type="text" className="text-input" name="search" id="search" autoFocus={true}/>
                <select className="select-input">
                    <option>General</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        </div>
    );
};

export default SearchBox;