import React from "react";
import './style.css'
import { Link } from "react-router-dom";

function NavBar(){

   return (
     <>
       <ul className="nav-list">
         <Link className="a" to={"/"}>
           <li className="item-list">
             <p>Adicionar</p>
           </li>
         </Link>
         <Link className="a" to={"/list"}>
           <li className="item-list">
             <p>Lista</p>
           </li>
         </Link>
       </ul>
     </>
   );
}

export default NavBar;