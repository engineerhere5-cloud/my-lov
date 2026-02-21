
import{Routes, Route,Link} from 'react-router-dom'
import Home from'./Home.jsx'
import Contact from './Memories.jsx'
import About from './About.jsx'


function App(){
    return(
        <>
        <nav>
            <Link to="/">home</Link>
            <Link to="/About">About Us </Link>
            <Link to="/Contact">Contact</Link>
        </nav>

        <Routes>
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/" element={<Home />} />

        </Routes>
        
        </>
    )
}

export default App
