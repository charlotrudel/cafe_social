import React from "react";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="flex justify-between items-center">
       <NavLink className="m-8" to="/">
        <h1 className="text-4xl font-bold">Café Social</h1>
       </NavLink>
 
       <div className=" m-4" id="navbarSupportedContent">
         <ul>
           <li>
             <NavLink to="/create" className="border rounded-md border-black p-2 bg-coffeeSecond shadow-sm shadow-[#7c5f3b]">
               Nouveau café
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}