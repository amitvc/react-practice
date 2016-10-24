/**
 * Created by amit on 10/20/16.
 */
import React, {Component} from "react";

class VideoListItem extends Component {

    constructor(props) {
        super(props);
    }

    onItemClicked(e) {
        this.props.onSelectedVideo(this.props.video);
    }

    render() {
        return (<li onClick={this.onItemClicked.bind(this)}
            className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={this.props.video.snippet.thumbnails.default.url}></img>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{this.props.video.snippet.title}</div>
                    </div>
                </div>
            </li>);
    }
}

export default VideoListItem;