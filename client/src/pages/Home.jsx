import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <img src="https://tse4.mm.bing.net/th/id/OIP.L42OHVIY_96Xenr1mhbDRwHaEJ?pid=Api&P=0&h=180" alt="Watermark" className="watermark" />
            <div className="home-content">
                <h1>Welcome to the E-Learning Platform</h1>
                <p>Learn anytime, anywhere. Start your learning journey with our top-rated courses!</p>
                <a href="/courses" className="home-button">Explore Courses</a>

                <div className="features">
                    <div className="feature-box">
                        <h3>🧠 Learn</h3>
                        <p>Gain new skills from expert instructors in tech, business, and more.</p>
                    </div>
                    <div className="feature-box">
                        <h3>🎓 Enroll</h3>
                        <p>Instantly enroll in our curated courses after login and grow your knowledge.</p>
                    </div>
                    <div className="feature-box">
                        <h3>📈 Track</h3>
                        <p>Keep track of your enrolled courses and learning progress.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;