import React from 'react'

import './Navigation.css';


export default function Navigation() {

  return (
    <div className='navigation'>
      <ul className='nav-links'>
        <a href="/home"> Katie Heinemann - Aerospace Engineer, MPH </a>
        <a href="/portfolio">Portfolio</a>
        <a href="/resume">Resume</a>
        <a href="/giving-back">Giving Back</a>
        <a href="/contact">Contact</a>
      </ul>
    </div>
  )
}
