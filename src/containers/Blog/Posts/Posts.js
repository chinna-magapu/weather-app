import React , { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import {Link} from 'react-router-dom';

class Posts extends Component{

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then ( response => {  
            let posts = response.data.slice( 0, 5);
            // posts = posts.map( post => { return post.author = 'chinna'} );
            this.setState( { posts: posts })})
        .catch( error => { this.setState({ error: true })});
    }

    postSelectedHandler =(id) =>{
        // alert(id);
        this.setState({selectedPostId: id});
    }

    render(){

        let posts = <p style={{textAlign: 'center'}}>Something went wrong.</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return ( 
                <Link to={ '/' + post.id} key={post.id}>
                <Post
                    title={post.title}
                    author={post.author}
                    clicked= { () => this.postSelectedHandler(post.id)}
                />
                </Link>
                )
            })
        }

        return (
         <div className="posts">
             {posts}
         </div>   
        )
    }

}

export default Posts;