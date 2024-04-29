import React from 'react';
import './Navbar.css';


 function Navbar() {
    return (
        <nav className="Menu">
            <div className="logosenai">
            <img src={require('./SENAI.png')} alt="LOGOSENAI" />   
            </div>
           
            <ul>Home</ul>
            <ul>Contato</ul>
            <ul>Quem Somos</ul>

            
        </nav>
    
    );
  }
  
  export default Navbar;

