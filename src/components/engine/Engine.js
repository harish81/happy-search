import React, {Component} from 'react';

class Engine extends Component {
    updateSearchEngine = (e)=>{
        this.props.updateSearchEngine(e.target.value);
    };
    render() {
        return (
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" name="search_engine" id="search_engine_google" value="google"
                               onChange={this.updateSearchEngine} checked={this.props.engine==='google'}/>
                        <label className="custom-control-label" htmlFor="search_engine_google">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="rounded-circle"
                                 style={{width: '19px', marginRight: '4px'}} alt="logo"/>
                            Google
                        </label>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" name="search_engine" id="search_engine_duckduckgo" value="duckduckgo"
                               onChange={this.updateSearchEngine} checked={this.props.engine==='duckduckgo'}/>
                        <label className="custom-control-label" htmlFor="search_engine_duckduckgo">
                            <img src="https://duckduckgo.com/assets/logo_header.v108.svg" className="rounded-circle"
                                 style={{width: '19px', marginRight: '4px'}} alt="logo"/>
                            DuckDuckGo
                        </label>
                    </div>
                </li>
            </ul>
        );
    }
}

export default Engine;