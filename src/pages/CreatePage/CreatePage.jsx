import { useState } from 'react'; 
import { useHistory } from 'react-router-dom';

const CreatePage = () => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        author: 'Josh'
    });

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { ...formData };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('New blog added');
            setIsLoading(false);
            history.push('/');
        })
    }
    
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Blog Title:</label>
                    <input 
                        type="text"
                        required
                        name='title'
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Blog Body:</label>
                    <textarea
                        name='body'
                        value={formData.body}
                        onChange={handleInputChange}
                        required
                        rows='10'>
                    </textarea>
                </div>

                <div className="form-group">
                    <label>Blog Author:</label>
                    <select
                        name='author'
                        onChange={handleInputChange}
                        value={formData.author}>
                        <option value="Select Author" defaultValue disabled>Select Author</option>
                        <option value="Josh">Josh</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                {
                    !isLoading ?  <button>Add Blog</button> : <button disabled>Adding Blog...</button>
                }
                
            </form>
        </div>
    )
}

export default CreatePage;