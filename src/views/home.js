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
    console.log('clicked');
    setIsMenuOpen(!isMenuOpen);
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
              <a href="#how-it-works" className="home-link01">
                Why choose us
              </a>
              <span className="home-link02">FAQ</span>
              <a href="#Contact" className="home-link03">
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
                <a href="#services" className="home-link05">
                      Services
                    </a>
                    <a href="#how-it-works" className="home-link06">
                      Why choose us
                    </a>
                    <span className="home-link07">FAQ</span>
                    <a href="#Contact" className="home-link08">
                      Contact
                    </a>
                    <button className="home-phone1 button">
                      <img
                        alt="image"
                        src="/Icons/phone.svg"
                        className="home-image03"
                      />
                      <a href="tel:+18326846045" className="home-link09">
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
          <div className="home-types"></div>
          <div className="home-inputs">
            <input
              type="text"
              placeholder="Name"
              autoComplete="name"
              className="input book-input"
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              className="input book-input"
            />
            <input
              type="text"
              placeholder="Specify Fire Protection Service You Are Interested In"
              className="input book-input"
            />
            <div className="home-lower">
              <div className="home-button">
                <button className="home-book1 button button-main">
                  <span>Send</span>
                </button>
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
          </div>
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
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
