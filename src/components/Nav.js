 
import { NavLink } from "react-router-dom";

import React  from "react";



const Nav = () => (

       <div className="nav">
          <ul>
            <li>
              <NavLink to="/shivers-react/game" activeStyle={{ color: 'white' }}>GAME</NavLink>
            </li>
            <li>
              <NavLink to="/shivers-react/about" activeStyle={{ color: 'white' }}>ABOUT</NavLink>
            </li>
          </ul>
        </div>
  )

export default Nav;
