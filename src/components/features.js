import React from 'react'

import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <div className={`features-section quick-links ${props.rootClassName} `}>
      <div className="features-heading">
        <h3 className="features-header">{props.title}</h3>
      </div>
      <p className="features-text">{props.description}</p>
      <div className="features-divider"></div>
    </div>
  )
}

Features.defaultProps = {
  rootClassName: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  icon: '3a2161ea-117d-4c8c-a58c-de675bf08925',
  title: 'Virtual Assistant',
}

Features.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
}

export default Features
