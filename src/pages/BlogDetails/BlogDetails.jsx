import React from 'react';
import { useParams } from 'react-router-dom';
import Blog from '../../components/blog/blog.component';
import useFetch from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const {data: blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`);

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isLoading && <div className='loading'>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && <Blog blog={blog} handleDelete={handleDelete}/> }
        </div>
    )
}

export default BlogDetails;
