import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', form);
            alert('Login successful');
            localStorage.setItem('userId', res.data._id);
            navigate('/courses');
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} required />
            <button>Login</button>
        </form>
    );
};
export default Login;