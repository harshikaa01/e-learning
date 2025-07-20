import { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Register = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', form);
            alert('Registered successfully');
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Register</h2>
            <input type="text" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} required />
            <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} required />
            <button>Register</button>
        </form>
    );
};
export default Register;