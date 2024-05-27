import React, { useState } from 'react';
import './HomeScreen.css'; // Import the CSS file for styling

const HomeScreen = () => {
    const [showSignInForm, setShowSignInForm] = useState(false);
    const [showJoinForm, setShowJoinForm] = useState(false);

    const handleSignInClick = () => {
        setShowSignInForm(true);
        setShowJoinForm(false); // Hide join form if visible
    }

    const handleJoinClick = () => {
        setShowJoinForm(true);
        setShowSignInForm(false); // Hide sign-in form if visible
    }

    return (
        <div className="home-screen">
            <div className="left-section">
                <h1>Explore your hobby or passion</h1>
                <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
</p>
                <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
            </div>
            <div className="right-section">
                <div className="button-container">
                    <button className="auth-btn sign-in" onClick={handleSignInClick}>Sign In</button>
                    <button className="auth-btn join" onClick={handleJoinClick}>Join Now</button>
                </div>
                <hr />
                <p className="connect-text">or connect with</p>
                <div className="social-login-container">
                    <button className="social-login google">
                        <i className="fab fa-google"></i> Continue with Google
                    </button>
                    <button className="social-login facebook">
                        <i className="fab fa-facebook"></i> Continue with Facebook
                    </button>
                </div>
                {showSignInForm && (
                    <div className="form-container">
                        
                        <form>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
                {showJoinForm && (
                    <div className="form-container">
                        
                        <form>
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomeScreen;

