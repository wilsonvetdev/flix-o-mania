import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchForm from './components/SearchForm'

function App() {
  return (
    <div className="App">
      <h1>Flix-O-Mania</h1>
      <SearchForm />
    </div>
  )
}

export default App
