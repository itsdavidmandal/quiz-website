import React, { useState } from 'react'
import './quiz.css'

const Quiz = () => {


  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>1. Which device is used for the internet connection ?</h2>
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>LAN cable </li>
            <li>Pendrive</li>
        </ul>
        <button>Next</button>
        <div className="index"> 1 of 5 questions</div>
      
    </div>
  )
}

export default Quiz
