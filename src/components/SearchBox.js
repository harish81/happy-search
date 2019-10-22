import React, {Component} from 'react';
import * as Icons from "react-feather";
import Autosuggest from 'react-autosuggest';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };
    }

    onSuggestionsFetchRequested = ({ value }) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";//todo: change at production
        fetch(proxyurl + "https://clients1.google.com/complete/search?hl=en&output=toolbar&q=" + value)
            .then(res => {
                return res.text();
            }).then(res => {
            let xml = (new window.DOMParser()).parseFromString(res, "text/xml");
            let suggestions = [];
            let suggestNodes = xml.getElementsByTagName("suggestion");
            for (let i = 0; i < suggestNodes.length; i++) {
                suggestions.push(suggestNodes[i].getAttribute("data"));
            }
            this.setState({suggestions: suggestions});
        });
    };

    onTextChange = (event, { newValue, method })=>{
        this.setState({value:newValue});
        this.props.changeSearch(newValue);
    };

    onPressEnter = (event)=>{
        if (event.keyCode === 13) {
            this.props.onSearch();
        }
    };

    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] });
    };

    render() {
        const { value, suggestions } = this.state;
        const props = this.props;
        const inputProps = {
            value,
            onChange: this.onTextChange,
            className: "text-input",
            onKeyDown: this.onPressEnter,
            autoFocus: true,
        };
        return (
            <div className="d-flex justify-content-center" style={{marginTop: '3.2rem'}}>
                <div className="search-box d-flex">
                    <Icons.Search style={{alignSelf: 'center', color: '#E0E0E0'}}/>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={(suggestion)=>(suggestion)}
                        renderSuggestion={(suggestion)=>(<span>{suggestion}</span>)}
                        inputProps={inputProps} />
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
    }
}

export default SearchBox;