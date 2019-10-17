import React, {Component} from 'react';
import logo from './logo.png';
import * as Icons from 'react-feather';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <img src={logo} alt="logo" className="img-fluid"
                             style={{width: '9rem', marginTop: '3.7rem'}}/>
                    </div>
                  <div className="d-flex justify-content-center" style={{marginTop:'3.2rem'}}>
                    <div className="search-box d-flex">
                      <Icons.Search style={{alignSelf:'center',color:'#E0E0E0'}}/>
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
                  <div className="d-flex justify-content-center" style={{marginTop:'2rem'}}>
                    <button className="btn btn-primary">Happy Search</button>
                    <button className="btn btn-outline-light ml-3">Advanced Settings</button>
                  </div>
                </div>
            </div>
        );
    }
}

export default App;
