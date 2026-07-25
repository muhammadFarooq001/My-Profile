import React, { useState, useRef } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', text: '' });

    try {
      // Replace these 3 values from your EmailJS dashboard
      const SERVICE_ID = 'service_v8t8loh';
      const TEMPLATE_ID = 'template_y2egcvb';
      const PUBLIC_KEY = 'Y2hOpQnuzc6vnNAPu';

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);

      setStatus({ type: 'success', text: ' Message sent successfully!' });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        text: ' Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact light-bg">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities and projects.
              Whether you have a question or just want to say hello, feel free to reach out!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div className="info-text">
                  <h4>Email</h4>
                  <a href="mailto:alifarroq745@gmail.com">alifarroq745@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><FaPhone /></div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+92 310 4139825</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><FaGithub /></div>
                <div className="info-text">
                  <h4>GitHub</h4>
                  <a href="https://github.com/muhammadFarooq001" target="_blank" rel="noopener noreferrer">
                    github.com/muhammadFarooq001
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows="6"
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>

            {status.text && (
              <p
                style={{
                  marginTop: '10px',
                  color: status.type === 'success' ? '#16a34a' : '#dc2626',
                  fontWeight: 500
                }}
              >
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;