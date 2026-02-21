import{Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Memories from'./Memories.jsx'
import About from './About.jsx'
import User from './User.jsx'
import Shayri from './Shayri.jsx'
import Heading from './Heading.jsx'


 export default function Param(){
  

    return(

       
        
       <div  style={{
  backgroundColor: "#ffe6f0",
  minHeight: "100vh",
  padding: "20px"
      }}>
        
        <nav>
            
           <Link to="/">Home</Link>|
            <Link to="/About" >About</Link>|
            <Link to="/Shayri">Shayri</Link>|
            <Link to="/memories">Best Memories</Link>|
            <Link to="/Heading">Heading</Link>|
            <Link to="/user/10">User</Link>|
              

        </nav>
        <Routes>
            <Route path="/" element={<Home/>} />
           
              <Route path="/about" element={<About/>}/>
              <Route path="/user/:id" element={<User/>}/>
              <Route path="/shayri" element={<Shayri/>}/>
              <Route path="/memories" element={<Memories/>}/>
               <Route path="/heading" element={<Heading/>}/>
        </Routes>
        
        </div>
    )
}