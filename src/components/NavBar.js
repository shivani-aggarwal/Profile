import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
      	<nav className="navbar fixed-top navbar-expand-sm bg-dark navbar-dark justify-content-end">
		    <a className="navbar-brand" href="#">Home</a>
		    <button className="ml-auto navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
		        <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="ml-auto collapse navbar-collapse flex-grow-0" id="navbarContent">
		        <ul className="navbar-nav text-right">
		            <li className="nav-item active">
		                <a className="nav-link" href="#">Home</a>
		            </li>
		            <li className="nav-item">
		                <a className="nav-link" href="#">About</a>
		            </li>
		             <li className="nav-item">
		                <a className="nav-link" href="#">Portfolio</a>
		            </li>
		             <li className="nav-item">
		                <a className="nav-link" href="#">Contact</a>
		            </li>
		        </ul>
		    </div>
		</nav>
      </div>
    );
  }
}
export default NavBar;