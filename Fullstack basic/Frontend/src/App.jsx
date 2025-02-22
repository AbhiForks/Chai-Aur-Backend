import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data)
      })
      .catch(error => {
        // Handle error
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>Chai Aur Fullstack</h1>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map((joke, index) => {
          return (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
