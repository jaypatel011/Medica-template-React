import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services - SFS</title>
        <meta property="og:title" content="Services - SFS" />
      </Helmet>
      <section id="Services" className="services-services">
        <header data-thq="thq-navbar" className="services-navbar">
          <div className="services-left">
            <Link to="/" className="services-navlink">
              <img
                alt="image"
                src="/Branding/logo-200h.webp"
                className="services-logo"
              />
            </Link>
            <nav className="services-links">
              <Link to="/" className="services-link">
                <span className="services-text">Home</span>
                <br></br>
              </Link>
              <span className="services-link1">Why choose us</span>
              <span className="services-link2">FAQ</span>
              <a href="#Contact" className="services-link3">
                Contact
              </a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="services-right">
            <button className="services-phone button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="services-image"
              />
              <a href="tel:+18326846045" className="services-link4">
                +1 832-684-6045
              </a>
            </button>
            <a href="#book" className="services-book button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="services-image1"
              />
              <span className="services-text02">Contact Us</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="services-burger-menu">
            <svg viewBox="0 0 1024 1024" className="services-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="services-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="services-nav"
            >
              <div className="services-container1">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="services-image2"
                />
                <div data-thq="thq-close-menu" className="services-menu-close">
                  <svg viewBox="0 0 1024 1024" className="services-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="services-nav1"
              >
                <span className="services-text03">Features</span>
                <span className="services-text04">How it works</span>
                <span className="services-text05">Prices</span>
                <span className="services-text06">Contact</span>
                <a href="#book" className="services-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="services-image3"
                  />
                  <span className="services-text07">Book an appointment</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="services-main">
          <div className="services-content">
            <div className="services-features">
              <h1 className="services-text08">All these impressive features</h1>
              <div className="services-container2">
                <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
                <FeatureCard2 rootClassName="rootClassName3"></FeatureCard2>
                <FeatureCard2 rootClassName="rootClassName2"></FeatureCard2>
                <FeatureCard2 rootClassName="rootClassName1"></FeatureCard2>
              </div>
            </div>
          </div>
          <div className="services-hero">
            <h1 className="services-text09">
              Let&apos;s keep things organized
            </h1>
            <span className="services-text10">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br></br>
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <div className="services-btn-group">
              <button className="services-button button">Get Started</button>
              <button className="services-button1 button">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
