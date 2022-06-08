import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../src/Assets/logoblack.svg"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import "../components/components.css"

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
}
window.addEventListener("scroll", scrollHandler);
   return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
     <Container>

     </Container>
       {/* <header data-testid="header" className="flex-row px-1 inline">
        <nav> 
           <ul className="flex-row">
           <li>
           <a href="/">
             <img src={homeLogo} alt="logo" style={{ maxHeight: "50px" }}/> 
           </a>
           </li>
             <li className="mx-2">
               <a href="#about" onClick={() => handleClick()}>
                 About
               </a>
             </li>
             <li className={"mx-2"}>
               <a href="#contact" onClick={() => handleClick()}>
                 Contact
               </a>
             </li>
             <li className={"mx-2"}>
               <a href="/projects" onClick={() => handleClick()}>
                 Projects
               </a>
               </li>
           </ul>
         </nav>
       </header>
     );
   } */}
   </Navbar>

export default Navbar;