import React, {Component} from 'react';
import Card from "./card/Card";
import List from "./list/List";
import ListItem from "./list/ListItem";

class Settings extends Component {
    filterByCategory = (category) => {
        return this.props.sites.filter(site => (site.category === category));
    };

    render() {
        return (
            <div>
                <div className="card-columns">
                    {this.props.categories.map((category, index) => (
                        <Card title={category} key={index}>
                            <List>
                                {this.filterByCategory(category).map(site => (
                                    <ListItem checked={this.props.selectedSites.includes(site.url)}
                                              updateSites={this.props.updateSites} key={site.url}
                                              site={site}>{site.name}</ListItem>
                                ))}
                            </List>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
}

export default Settings;