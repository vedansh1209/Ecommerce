import React from 'react';
import Navbar from '../../components/Mainpage/navbar';
import './AboutUs.css'; // Assuming you have a CSS file for styling

const AboutUs = () => {
    return (
        <>
        <Navbar/>
        <div className="about-us-container">
            <section className="introduction">
                <h1>About Us</h1>
                <p>Welcome to [Your Company Name], your number one source for all things [product category]. We're dedicated to giving you the very best of [product category], with a focus on quality, customer service, and uniqueness.</p>
            </section>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>Our mission is to provide customers with exceptional products and an unparalleled shopping experience. We aim to exceed expectations and deliver the best quality and service possible.</p>
            </section>

            <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="https://assets.bizclikmedia.net/320/697191c310e2c9b640a94d2cd1dedf10:60e34093e0ad6d5b0a3c89ab0d4f9258/lars-4-1024x683.jpg" alt="CEO" />
                        <h3>John Doe</h3>
                        <p>CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="https://assets.bizclikmedia.net/320/697191c310e2c9b640a94d2cd1dedf10:60e34093e0ad6d5b0a3c89ab0d4f9258/lars-4-1024x683.jpg" alt="Designer" />
                        <h3>Jane Smith</h3>
                        <p>Head Designer</p>
                    </div>
                    <div className="team-member">
                        <img src="https://assets.bizclikmedia.net/320/697191c310e2c9b640a94d2cd1dedf10:60e34093e0ad6d5b0a3c89ab0d4f9258/lars-4-1024x683.jpg" alt="Manager" />
                        <h3>Emily Johnson</h3>
                        <p>Operations Manager</p>
                    </div>
                    {/* Add more team members as needed */}
                </div>
            </section>

            <section className="values">
                <h2>Our Values</h2>
                <ul>
                    <li>Customer Satisfaction: We prioritize our customers and strive to exceed their expectations.</li>
                    <li>Quality: We ensure our products meet the highest standards of quality.</li>
                    <li>Integrity: We conduct our business with honesty and transparency.</li>
                    <li>Innovation: We continuously seek new and creative solutions to meet our customers' needs.</li>
                </ul>
            </section>
        </div>
        </>
    );
};

export default AboutUs;
