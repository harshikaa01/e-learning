import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => (
    <nav className="navbar">
        <h2>E-Learning Project</h2>
        <div>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/my-courses">My Courses</Link>

        </div>
    </nav>
);
export default Navbar;