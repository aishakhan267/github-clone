import React from "react";
import "./Header.css";
function Header(){
    return(
      <header>
          <div className="options">
              <i class="fab fa-github"></i>
              <ul>
                <li>
                  <a>Why GitHub?</a>
                </li>
                <li><a>Enterprise</a></li>
                <li><a>Explore</a></li>
                <li><a>Marketplace</a></li>
                <li><a>Pricing</a></li>
              </ul>
          </div>
          <div className="buttons">
            <input type="search" placeholder="Search GitHub" />
            <button className="signin">Sign in</button>
            <button className="signup">Sign up</button>
            <i class="fas fa-bars"></i>
          </div>
      </header>
    )
}
export default Header;