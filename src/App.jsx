import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> THE ARENA </h1>
        <h3> Data Driven Sports Commentary </h3>
      </div>

      <div>
        <a>Article 1</a>
        <a>Article 2</a>
        <a>Article 3</a>
        <a>Article 4</a>
        <a>Article 5</a>
        <a>Article 6</a>
        <a>Article 7</a>
        <a>Article 8</a>
        <a>Article 9</a>
        <a>Article 10</a>
      </div>

    </>
  )
}

export default App
