import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaRegEnvelope, FaRegCommentDots } from 'react-icons/fa';
import './ContactUs.css';
import Header from '../components/Header';
import NewFooter from '../components/NewFooter';

const mapContainerStyle = {
  height: '400px',
  width: '100%'
};

const center = {
  lat: 22.7196,
  lng: 75.8577
};

const ContactUs = () => {
  return (
  <>
    <Header />
    <div className="contact-container bg-blue-100">
      <div className="contact-content">
        <div className="contact-details">
          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Address</h3>
            <p>171 Devi Ahilya Marg, Off. 12, Jail Road, Indore - 452007, Madhya Pradesh, India.</p>
          </div>
          <div className="info-box">
            <FaPhone className="info-icon" />
            <h3>Phone</h3>
            <p>+91- 9714000456</p>
          </div>
          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>care@qucons.com</p>
          </div>
        </div>
        <form className="contact-form">
          <h2 className="contact-title">Send us a message</h2>
          <p className="contact-subtitle">If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It’s my pleasure to help you.</p>
          <div className="form-group">
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-wrapper">
              <FaRegEnvelope className="input-icon" />
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-wrapper">
              <FaRegCommentDots className="input-icon" />
              <textarea id="message" placeholder="Enter your message" required></textarea>
            </div>
          </div>
          <button type="submit" className="submit-button">Send Now</button>
        </form>
      </div>
      <div className="map-container bg-red-600">
        
      </div>
    </div>
    <NewFooter />
    </>
  );
};

export default ContactUs;