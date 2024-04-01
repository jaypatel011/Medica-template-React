import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Features from '../components/features'
import Practice from '../components/practice'
import './home.css'

const Home = (props) => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add state for form inputs
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State for validation errors
const [errors, setErrors] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const [isLoading, setIsLoading] = useState(false);


// Email validation function
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Phone validation function (basic example, customize regex as needed for your use case)
const validatePhone = (phone) => {
  const re = /^\d{10}$/;
  return re.test(String(phone));
};

// Function to validate all fields
const validateForm = () => {
  let tempErrors = {};
  let isValid = true;

  if (!formInput.name) {
    isValid = false;
    tempErrors['name'] = 'Name is required';
  }
  if (!formInput.email) {
    isValid = false;
    tempErrors['email'] = 'Email is required';
  } else if (!validateEmail(formInput.email)) {
    isValid = false;
    tempErrors['email'] = 'Email is not valid';
  }
  if (!formInput.phone) {
    isValid = false;
    tempErrors['phone'] = 'Phone is required';
  } else if (!validatePhone(formInput.phone)) {
    isValid = false;
    tempErrors['phone'] = 'Phone is not valid';
  }
  if (!formInput.message) {
    isValid = false;
    tempErrors['message'] = 'Message is required';
  }

  setErrors(tempErrors);
  return isValid;
};

  // Function to update state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate form before sending
  if (!validateForm()) {
    return; // Stop the submission if the form is invalid
  }
  setIsLoading(true);

    try {
      const response = await fetch('/api/sendEmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInput),
      });
      setIsLoading(false);

      if (response.ok) {
        const responseBody = await response.text();
        setIsSubmitted(true); // Set the form as submitted successfully
        setFormInput({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrors({ ...errors, submit: 'There was an error submitting the form.' });
      }
    } catch (error) {
      setIsLoading(false); // Revert loading state in case of error
      setErrors({ ...errors, submit: 'There was an error submitting the form.' });
      console.error('Error:', errors);
    }
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Fire Sprinkler Installation & Inspection Services | Specialty Fire Services</title>
        <meta property="og:title" content="Fire Sprinkler Installation & Inspection Services | Specialty Fire Services" />
        <meta name="description" content="Offering professional fire sprinkler installation, emergency fire alarm repair, and commercial fire protection services. Ensure your safety with our comprehensive fire safety solutions."/>
        <meta name="keywords" content="fire sprinkler installation, fire alarm system maintenance, commercial fire protection services, residential fire safety solutions"/>
      </Helmet>
      <section id="home" className="home-home">
        <header data-thq="thq-navbar" className="home-navbar">
          <div className="home-left">
            <Link to="/" className="home-navlink">
              <img
                alt="image"
                src="/Branding/logo.jpg"
                className="home-logo"
              />
            </Link>
            <nav className="home-links">
              <a href="#services" className="home-link">
                Services
              </a>
              <a href="#how-it-works" className="home-link">
                Why choose us
              </a>
              <a href="#about-us" className="home-link">
                About us
              </a>
              <a href="#Contact" className="home-link">
                Contact
              </a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-right">
            <button className="home-phone button">
              <img alt="image" src="/Icons/phone.svg" className="home-image" />
              <a href="tel:+18326846045" className="home-link04">
                +1 832-684-6045
              </a>
            </button>
            <a href="#Contact" className="home-contact button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image01"
              />
              <span className="home-text">Contact Us</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu" onClick={toggleMenu}>
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path fill='white' d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          {isMenuOpen && (
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="home-nav">
                <div className="home-container1">
                  <img alt="image" src="/Branding/logo.jpg" className="home-image02" />
                  <div data-thq="thq-close-menu" className="home-menu-close" onClick={toggleMenu}>
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path fill='white' d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" className="home-nav1">
                <a href="#services" className="home-link" onClick={toggleMenu}>
                      Services
                    </a>
                    <a href="#how-it-works" className="home-link" onClick={toggleMenu}>
                      Why choose us
                    </a>
                    <a href="#about-us" className="home-link" onClick={toggleMenu}>
                      About us
                    </a>
                    <a href="#Contact" className="home-link" onClick={toggleMenu}>
                      Contact
                    </a>
                    <button className="home-phone1 button">
                      <img
                        alt="image"
                        src="/Icons/phone.svg"
                        className="home-image03"
                      />
                      <a href="tel:+18326846045" className="home-link09" onClick={toggleMenu}>
                        +1 832-684-6045
                      </a>
                    </button>
                </nav>
              </div>
            </div>
          )}
        </header>
        <div className="home-main">
          <div className="home-content">
            <div className="home-heading">
              <h1 className="home-header">Specialty Fire Services</h1>
              <span className="home-text01">
                Your Partner in Comprehensive Fire Protection
              </span>
            </div>
            <a href="#Contact" className="home-book button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image04"
              />
              <span className="home-text02">
                <span>Contact Us</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
        <div id="features" className="home-features">
          <div className="home-content1">
            <Features
              title="Customized Fire Safety Solutions"
              description="Tailored Protection: Customized fire safety solutions designed to meet the unique needs of your business, ensuring maximum safety and compliance."
              rootClassName="features-root-class-name"
            ></Features>
            <Features
              title="Expertise and Reliability"
              description="Trusted Expertise: Licensed professionals with extensive experience in fire safety, ready to deliver reliable and efficient service anytime, anywhere."
              rootClassName="features-root-class-name1"
            ></Features>
            <Features
              title="Proactive Maintenance"
              description="Stay Compliant: Proactive maintenance and inspection programs to keep your fire protection systems in ongoing compliance with regulations."
              rootClassName="features-root-class-name2"
            ></Features>
          </div>
        </div>
      </section>
      <section id="services" className="home-services">
        <div className="home-heading1">
          <h2 className="home-text05">Our Services</h2>
        </div>
        <div className="home-content2">
          <div className="home-grid">
            <Link to="/">
              <div className="home-practice-wrapper">
                <Practice
                  title="Fire Protection"
                  description="Ensuring the safety of your premises with comprehensive fire protection services. From installation to routine inspections, our certified team provides the expertise needed to safeguard your business against fire hazards."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper1">
                <Practice
                  title="24/7 Emergency Response"
                  description="Ready when you need us the most, our emergency response team is available around the clock to address any fire safety concerns. Fast, reliable, and always prepared to handle urgent situations."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper2">
                <Practice
                  title="Compliance and Safety Inspections"
                  description="Stay up-to-date with fire safety regulations through our meticulous inspection services. Our preventive measures help you maintain compliance and peace of mind."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper3">
                <Practice
                  title="Fire Safety Equipment Maintenance"
                  description="Depend on our thorough maintenance programs to keep your fire safety equipment in optimal condition. Our proactive approach ensures functionality and efficiency when it’s critical."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper4">
                <Practice
                  title="Alarm Systems &amp; Monitoring"
                  description="Protect your property with our advanced alarm systems and monitoring services. We provide cutting-edge technology coupled with constant surveillance to alert you at the first sign of danger."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper5">
                <Practice
                  title="Automated Fire &amp; Sprinkler Installation"
                  description="Secure your premises with expert installation of automated fire control and sprinkler systems for immediate response and fire suppression."
                ></Practice>
              </div>
            </Link>
          </div>
          <button data-open="practices" className="home-all button button-main">
            <span>All services</span>
          </button>
        </div>
      </section>
      <section id="how-it-works" className="home-why">
        <div className="home-heading2">
          <h2 className="home-header1">Why choose us</h2>
          <p className="home-header2">
            Choosing Specialty Fire Services means partnering with a leader in
            fire safety. Our licensed experts provide top-tier installation and
            maintenance, ensuring your fire control systems are reliable and
            compliant. Our 24/7 emergency response guarantees that we&apos;re
            there when you need us, giving you confidence that your property and
            people are protected by the best in the business.
          </p>
        </div>
        <div className="home-content3">
          <div className="home-container2">
            <div className="home-container3">
              <ul className="home-ul list">
                <li className="list-item">
                  <span>
                    <span>Licensed and experienced technicians</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span>Custom fire protection solutions</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span>State-of-the-art automated systems</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span>Expert installation and maintenance</span>
                    <br></br>
                  </span>
                </li>
              </ul>
            </div>
            <div className="home-container4">
              <ul className="home-ul1 list">
                <li className="list-item">
                  <span>
                    <span>Compliance with safety regulations</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span>24/7 emergency response services</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span>Continuous innovation in fire safety</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    <span>Comprehensive training and education programs</span>
                    <br></br>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="home-features1">
        <div className="home-section">
          <div className="home-content4">
            <div className="home-header3">
              <h2 className="home-heading3">
                licensed to inspect, refill or replace your fire extinguishers
              </h2>
              <p className="home-capton">
                Whether you have automated Co2 systems, dry systems or
                individual extinguishers, no job is too big or too small for us!
              </p>
            </div>
          </div>
          <img
            alt="image"
            src="/fireextinguishers-600w.webp"
            className="home-image05"
          />
        </div>
        <div className="home-section1">
          <div className="home-content5">
            <div className="home-header4">
              <h2 className="home-heading4">
                Design, install, maintain and monitor fire alarm systems
              </h2>
              <p className="home-capton1">
                Specialty Fire Services provides monitoring services so that you
                can have peace of mind that your assets are protected and your
                risk is mitigated!
              </p>
            </div>
          </div>
          <img
            alt="image"
            src="/firealarm-600w.webp"
            className="home-image06"
          />
        </div>
        <div className="home-section2">
          <div className="home-content6">
            <div className="home-header5">
              <h2 className="home-heading5">
                Repair underground utilities, Backflow or sprinkler systems
              </h2>
              <p className="home-capton2">
                <span>
                  With 24/7/365
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text32">EMERGENCY SERVICE,</span>
                <span> we are just a phone call away!</span>
              </p>
            </div>
            <a href="tel:+18326846045" className="home-phone2 button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="home-image07"
              />
              <span className="home-text34">+1 832-684-6045</span>
            </a>
          </div>
          <img alt="image" src="/backflow-600w.webp" className="home-image08" />
        </div>
      </section>
      <section id="Contact" className="home-contact1">
        {isSubmitted ? (
          <div className="home-text43">
            Thank you for your message. We will get back to you soon.
          </div>
          ) : (
          <div>
          <div className="home-heading6">
            <h2 className="home-text35">Contact us</h2>
            <p className="home-text36">
              <span className="home-text37">
                Need assistance or have questions? Reach out to us, and we&apos;ll
                get back to you as soon as possible.
              </span>
              <br className="home-text38"></br>
              <br className="home-text39"></br>
              <span className="home-text40">
                Please fill out the form below with your details.
              </span>
              <br></br>
            </p>
          </div>
          <div className="home-form">
            <div className="home-inputs">
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="name"
                className={`input book-input ${errors.name ? 'error' : ''}`}
                value={formInput.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                className={`input book-input ${errors.email ? 'error' : ''}`}
                value={formInput.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                autoComplete="tel"
                className={`input book-input ${errors.phone ? 'error' : ''}`}
                value={formInput.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
              <input
                type="text"
                name="message"
                placeholder="Specify Fire Protection Service You Are Interested In"
                className={`input book-input ${errors.message ? 'error' : ''}`}
                value={formInput.message}
                onChange={handleInputChange}
              />
              {errors.message && <div className="error-message">{errors.message}</div>}
              <button onClick={handleSubmit} className="home-book1 button button-main" disabled={isLoading}>
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                <span>Send</span>
              )}
              </button>
              {errors.submit && <div className="error-message">{errors.submit}</div>}
            </div>
          </div>
        </div>)}
        <div className="home-lower">
          <div className="home-button">
           
            <p className="home-text43">
              For immediate assistance, please call our 24/7 support line. 
            </p>
            <a href="tel:+18326846045" className="home-phone3 button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="home-image09"
              />
              <span className="home-text44">+1 832-684-6045</span>
            </a>
          </div>
        </div>
      </section>
      <section id="about-us" className="home-about-us">
          <div className="home-heading6">
            <h2 className="home-text35">About us</h2>
            <p className="home-about">
              <span className="home-text37">
              At Specialty Fire Services, we are dedicated to ensuring the safety and protection of lives and property through comprehensive fire protection solutions. Our founding owners have over 20 years of industry experience in fire protection and mechanical engineering, we have established ourselves as a trusted leader in the field, serving clients across Southeast Texas.
              </span>
              <br className="home-text38"></br>
              <br className="home-text39"></br>
              <span className="home-text40">
              Our team of highly skilled professionals is committed to delivering exceptional service and expertise in all aspects of fire protection, including design, installation, inspection, maintenance, and emergency response. We work closely with our clients to understand their unique needs and provide tailored solutions that meet or exceed regulatory requirements and industry standards.
              </span>
              <br className="home-text38"></br>
              <br className="home-text39"></br>
              <span className="home-text40">
              Contact us today to learn more about our services and how we can help you with your fire protection needs.
              </span>
            </p>
          </div>
      </section>
      <footer className="home-footer">
        <div className="home-container5">
          <img
            alt="logo"
            src="/Branding/logo.jpg"
            className="home-image10"
          />
          <nav className="home-nav2">
            <a href="#services" className="home-link10">
              Services
            </a>
            <a href="#features" className="home-link11">
              Features
            </a>
            <a href="#how-it-works" className="home-link12">
              Why choose us
            </a>
            <a href="#Contact" className="home-link13">
              Contact
            </a>
          </nav>
        </div>
        <div className="home-separator"></div>
        <div className="home-container6">
          <span className="home-text45">
            © 2024 Speciality Fire Services, All Rights Reserved.
          </span>
          <div className="home-icon-group">
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
