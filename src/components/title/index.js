// Libraries
import React from 'react'

// Components
import './styles.css'

/**
 * @typedef {{
 * title: string
 * }} TitleProps
 * @param {TitleProps} props
 */
const Title = ({ title }) => (
  <div className="title-container">
    <h1>{title}</h1>
  </div>
)

export default Title
