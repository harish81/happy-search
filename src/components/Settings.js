import React, {Component} from 'react';
import Card from "./card/Card";
import List from "./list/List";
import ListItem from "./list/ListItem";

class Settings extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <Card title={"This Title"}>
                            <List>
                                <ListItem>Onetwo</ListItem>
                                <ListItem>3242</ListItem>
                                <ListItem>dfgdg</ListItem>
                                <ListItem>dsf</ListItem>
                                <ListItem>this issss</ListItem>
                            </List>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;