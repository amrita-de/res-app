import React from 'react';
import './FooterComponent.css'; // Import the CSS file for styling
import img from './img.jpg'; // Import the image file

const FooterComponent = () => {
    return (
        <div className='footer'>
            <div className='footer-section'>
                <div className='footer-column'>
                    <h3>Hobbycue</h3>
                    <p>About Us</p>
                    <p>Our Services</p>
                    <p>Work with Us</p>
                </div>
                <div className='footer-column'>
                    <h3>How Do I</h3>
                    <p>Sign Up </p>
                    <p>Add a Listing</p>
                    <p>Claim Listing</p>
                    <p>Post a Query</p>
                    <p>Add a Blog Post</p>
                </div>
                <div className='footer-column'>
                    <h3>Quick Links</h3>
                    <p>Listings </p>
                    <p>Shop / Store</p>
                    <p>Community </p>
                </div>
                <div className='footer-icons'>
                    <a href="#!" className="footer-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#!" className="footer-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#!" className="footer-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#!" className="footer-icon"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#!" className="footer-icon"><i className="fab fa-pinterest"></i></a>
                    <a href="#!" className="footer-icon"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className='footer-copyright'>
        <hr/>
        <p>© Purple Cues Private Limited</p>
      </div>
        </div>
    );
}

export default FooterComponent;
