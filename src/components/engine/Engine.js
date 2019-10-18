import React, {Component} from 'react';

class Engine extends Component {
    render() {
        return (
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" name="example1r"/>
                        <label className="custom-control-label" htmlFor="example1r">
                            <img src="https://cdn.worldvectorlogo.com/logos/laravel.svg" className="rounded-circle"
                                 style={{width: '19px', marginRight: '4px'}} alt="logo"/>
                            Text
                        </label>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" name="example1r"/>
                        <label className="custom-control-label" htmlFor="example1r">
                            <img src="https://cdn.worldvectorlogo.com/logos/laravel.svg" className="rounded-circle"
                                 style={{width: '19px', marginRight: '4px'}} alt="logo"/>
                            Text
                        </label>
                    </div>
                </li>
            </ul>
        );
    }
}

export default Engine;