import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (!userId) {
            navigate('/login');
            return;
        }
        axios.get(`http://localhost:5000/api/courses/enrolled/${userId}`)
            .then(res => setCourses(res.data))
            .catch(err => console.error('Failed to load enrolled courses:', err));
    }, [userId, navigate]);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>My Enrolled Courses</h1>
            {courses.length === 0 ? (
                <p style={{ textAlign: 'center' }}>You have not enrolled in any courses yet.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                    {courses.map(c => (
                        <div key={c._id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', background: '#f8f8f8' }}>
                            <h2>{c.title}</h2>
                            <p>{c.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyCourses;