import React, { Component } from 'react';
import axios from 'axios';
import Wrap from '../../../hoc/Wrap';

class FullPost extends Component {

    state = {
        loadedPost: null
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        if (this.props.match.params.id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                .then(response => { this.setState({ loadedPost: response.data }) })
                .catch(error => { console.log(error); });
        }
    }

    render() {
        let fullPost = null;

        if (this.state.loadedPost == null) {
            fullPost = <div> No Data found </div>
        } else {
            fullPost =
                <Wrap>
                    <div>
                        <h4> {this.state.loadedPost.title} </h4>
                        <p> {this.state.loadedPost.body}</p>
                    </div>
                </Wrap>;
        }
        return (
            <Wrap>
                {fullPost}
            </Wrap>

        );
    }

}

export default FullPost;