import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import MyCourses from './pages/MyCourses';

function App() {
    const isAuthenticated = !!localStorage.getItem('userId');

    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/courses"
                        element={isAuthenticated ? <Courses /> : <Navigate to="/login" />} />
                    <Route
                        path="/my-courses"
                        element={isAuthenticated ? <MyCourses /> : <Navigate to="/login" />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
