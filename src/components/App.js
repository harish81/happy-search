import React, {Component} from 'react';
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import ButtonBar from "./ButtonBar";
import Settings from "./Settings";
import Engine from "./engine/Engine";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Logo/>
                    <SearchBox/>
                    <ButtonBar/>
                </div>
                <div className="settings-box">
                    <div className="container d-flex justify-content-center" style={{marginTop:'3rem'}}>
                        <Engine/>
                    </div>
                    <div className="container" style={{marginTop:'3rem'}}>
                        <Settings/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
