import React from 'react';

const Blog = ({blog, handleDelete}) => {
    const {title, body, author} = blog;
    return (
        <article className='blog-detail'>
            <h2>{ title }</h2>
            <p className="author">Written by { author }</p>
            <div>{ body }</div>
            <button onClick={handleDelete}>Delete</button>
        </article>
    )
}

export default Blog;
