import { useState } from 'react'
import './App.css'
import Main from "../src/Components/Main"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main/>
    </div>
  )
}

export default App
