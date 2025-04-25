import './App.css'
import Card from './components/Card.jsx'
import NavBar from './components/NavBar.jsx'
import hero from './assets/IMG20250319134350 - copy.jpg'


function App() {

  return (
    <>
      <div>
        <NavBar />
        <Card img={hero}/>
      </div>
    </>
  )
}

export default App
