import './App.css'
import UserCard from './components/UserCard'
import suraj from './assets/IMG_20250320_173249.jpg';
import vishnu from './assets/IMG20250319134355 - copy.jpg';
import bharath from './assets/BK9A0466 cpy.jpg';  

function App() {
  return (
    <>
      <div className='cards-container'>
        <UserCard name='Suraj' desc='This is Suraj' image={suraj}/>
        <UserCard name='Vishnu' desc='This is Vishnu' image={vishnu}/>
        <UserCard name='Bharath' desc='This is Bharath' image={bharath}/>
      </div>
    </>
  )
}

export default App
