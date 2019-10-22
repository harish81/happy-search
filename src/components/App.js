import React, {Component} from 'react';
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import ButtonBar from "./ButtonBar";
import Settings from "./Settings";
import Engine from "./engine/Engine";
import {data} from "./util/data";

class App extends Component {
    constructor(props) {
        super(props);
        let datas = data;
        datas.categories.sort();
        this.state = {...datas, searchEngine: 'google', selectedSite: [], searchTerm: '', showSettings: false};
    }

    updateSearchEngine = (engine) => {
        this.setState({searchEngine: engine});
    };
    updateSites = (e, siteUrl) => {
        let siteUrls = new Set(this.state.selectedSite);
        if (e.target.checked) {
            siteUrls.add(siteUrl);
        } else {
            siteUrls.delete(siteUrl);
        }

        this.setState({selectedSite: [...siteUrls]});
    };
    changeSearch = (val) => {
        this.setState({searchTerm: val})
    };
    changeCategory = (e) => {
        let cat = e.target.value;
        if (cat !== -1) {
            let sites = this.state.sites.filter(site => {
                return site.category === cat;
            });
            sites = sites.map(site => site.url);
            this.setState({selectedSite: sites});
        } else {
            this.setState({selectedSite: []});
        }
    };
    onSearch = () => {
        let searchQuery = this.state.searchTerm + " ";
        let searchUrl = "";
        switch (this.state.searchEngine) {
            case "duckduckgo":
                if (this.state.selectedSite.length > 0)
                    searchQuery += "site:" + this.state.selectedSite.join();
                searchUrl = "https://duckduckgo.com/?q=";
                break;
            case "devdocs":
                searchUrl = "https://devdocs.io/#q=";
                break;
            default:
                searchQuery += this.state.selectedSite.map(url => 'site:' + url).join(" OR ");
                searchUrl = "https://www.google.com/search?q=";
                break;
        }

        window.open(searchUrl + searchQuery, "_blank");
    };


    componentDidMount() {
        let screenSize = window.screen.width+"x"+window.screen.height;
        fetch(`https://source.unsplash.com/${screenSize}/daily/?nature`)
            .then(res => {
                let body = document.getElementsByTagName("body")[0];
                body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url("${res.url}")`;
            });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Logo/>
                    <SearchBox changeCategory={this.changeCategory}
                               categories={this.state.categories}
                               changeSearch={this.changeSearch}
                               searchTerm={this.state.searchTerm} onSearch={this.onSearch}/>
                    <ButtonBar onSearch={this.onSearch}/>
                </div>
                <div className="settings-box" style={{display: 'none'}}>
                    <div className="container d-flex justify-content-center" style={{marginTop: '3rem'}}>
                        <Engine updateSearchEngine={this.updateSearchEngine} engine={this.state.searchEngine}/>
                    </div>
                    <div className="container" style={{marginTop: '3rem'}}>
                        <Settings sites={this.state.sites} categories={this.state.categories}
                                  selectedSites={this.state.selectedSite}
                                  updateSites={this.updateSites}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
