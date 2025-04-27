import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'
import Card from '../src/components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <Button handleClick= {handleClick} text="Click me!!">
        <h1>{count}</h1>
      </Button>
      <Card name="Card">
        <h1>Card</h1>
      </Card>  
    </div>
   
  )
}

export default App
