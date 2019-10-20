import React, {Component, Fragment} from 'react';

class GoogleSuggestInput extends Component {
    render() {
        const props = this.props;
        return (
            <Fragment>
                <input
                    {...props}/>
            </Fragment>
        );
    }
}

export default GoogleSuggestInput;