/**
 * Created by amit on 10/19/16.
 */

import React, {Component} from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import SearchBar from "./component/searchBar";
import VideoList from "./component/videoList";
import VideoDetail from "./component/videoDetail";

import YTSearch from "youtube-api-search";


const API_KEY = "AIzaSyD-eTLhQvQjdsomtXujuKdyqDSQWkDohCg";


/**
 *   This is the main class
 *
 */
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos:[],
            selectedVideo : null
        };

        this.onNewSearchTerm('tendulkar');

    }


    onNewSearchTerm(term) {
        const self = this;
        YTSearch({key:API_KEY, term:term}, function(videos){
            self.setState(
                {
                    videos:videos,
                    selectedVideo : videos[0]
                }
            );
        });
    }

    onSelectedVideo (video) {
        this.setState({selectedVideo:video});
    }


    render() {
        const searchTerm = _.debounce(this.onNewSearchTerm,300);


        return (
            <div>
                <SearchBar onNewSearchTerm={searchTerm.bind(this)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo.bind(this)}/>
            </div>

        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));
