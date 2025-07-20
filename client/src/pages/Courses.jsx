import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (!userId) {
            navigate('/login');
            return;
        }
        axios.get('http://localhost:5000/api/courses')
            .then(res => setCourses(res.data))
            .catch(err => console.error('Fetch error:', err));
    }, [userId, navigate]);

    const enroll = async (courseId) => {
        try {
            await axios.post('http://localhost:5000/api/courses/enroll', {
                userId,
                courseId
            });
            alert('Enrolled successfully!');
            navigate('/my-courses');
        } catch (err) {
            console.error(err);
            alert('Enrollment failed!');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Available Courses</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {courses.map(c => (
                    <div key={c._id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', background: '#f8f8f8' }}>
                        <h2>{c.title}</h2>
                        <p>{c.description}</p>
                        <button onClick={() => enroll(c._id)}>Enroll</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;