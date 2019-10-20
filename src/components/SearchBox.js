import React from 'react';
import * as Icons from "react-feather";
import GoogleSuggestInput from "./GoogleSuggestInput";

const SearchBox = (props) => {
    return (
        <div className="d-flex justify-content-center" style={{marginTop: '3.2rem'}}>
            <div className="search-box d-flex">
                <Icons.Search style={{alignSelf: 'center', color: '#E0E0E0'}}/>
                <GoogleSuggestInput
                    onKeyUp={event => {
                        if (event.keyCode === 13) {
                            props.onSearch();
                        }
                    }}
                    type="text" className="text-input" name="search" id="search" autoFocus={true}
                    onChange={e => {
                        props.changeSearch(e.target.value)
                    }} value={props.searchTerm}/>
                <select className="select-input" onChange={props.changeCategory}>
                    <option value="-1">None</option>
                    {
                        props.categories.map(category => (
                            <option key={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
};

export default SearchBox;