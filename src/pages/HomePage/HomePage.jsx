import BlogList from '../../components/blog-list/blog-list.component';
import useFetch from '../../hooks/useFetch';

const HomePage = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    return (
        <div>
            {isLoading && <div className='loading'>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {error && <div>{error}</div> }
        </div>
    )
}

export default HomePage;
