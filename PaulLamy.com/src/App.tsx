import './App.css'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Intro from './intro/Intro'

function App() {

  return (
    <>
      <div className="container">
        <div className="navbar"><Navbar /></div>
        <div className="hero"><Hero /></div>
        <div className="intro"><Intro /></div>
      </div>
    </>
  )
}

export default App
