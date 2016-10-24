/**
 * Created by amit on 10/20/16.
 */
/**
 * Created by amit on 10/19/16.
 */
import React, {Component} from "react";
import VideoListItem from "./videoListItem";


class VideoList  extends Component {

    constructor(props){
        super(props);
        this.state = {term:""};
    }

    render() {
        const self = this;
        const items = this.props.videos.map(function(item){
            return <VideoListItem key={item.etag} video={item} onSelectedVideo={self.props.onSelectedVideo}/>
        });

        return (<ul className="col-md-4 list-group">
            {items}
        </ul>);
    }

}

export default VideoList;