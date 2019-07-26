import React from 'react';
import './Post.css';

const post = ( props ) => {
    return (
        <div onClick={props.clicked} className="post">
        <div className="card">  
        <h3>{props.title}</h3>
        <p>Some text</p>
        <p>Some text</p>
        </div>  
        </div>
    )
}

export default post;