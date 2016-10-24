/**
 * Created by amit on 10/19/16.
 */
import React, {Component} from "react";

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {term:""};
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={this.handleChange.bind(this)}/>
            </div>
            );
    }

    handleChange(event) {
        this.setState({term : event.target.value});
        this.props.onNewSearchTerm(event.target.value);
    }

}

export default SearchBar;