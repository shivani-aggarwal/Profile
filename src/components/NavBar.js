import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.portfolio = this.props.portfolioRef;
		this.about = this.props.aboutRef;
		this.contact = this.props.contactRef;
	}

	home() {
		window.scroll({top: 0, left:0, behaviour: 'smooth'});
	return false;
	}

	scrollToAbout = () => {
	window.scrollTo({
	    top: this.about.current.offsetTop - 60, 
	    behavior: "smooth"
	})    
	return false;
	}

	scrollToPortfolio = () => {
	window.scrollTo({
	    top: this.portfolio.current.offsetTop - 60, 
	    behavior: "smooth"
	})
		return false;
	}

	scrollToContact = () => {
		window.scrollTo({
	    top: this.contact.current.offsetTop - 60, 
	    behavior: "smooth"
	})
		return false;
	}

	render() {
	return (
	  <div>
	      <nav className="navbar fixed-top navbar-expand-sm bg-dark navbar-dark justify-content-end">
	        <a className="navbar-brand" href="javascript:;" onClick={this.home}>Home</a>
	        <button className="ml-auto navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
	            <span className="navbar-toggler-icon"></span>
	        </button>
	        <div className="ml-auto collapse navbar-collapse flex-grow-0" id="navbarContent">
	            <ul className="navbar-nav text-right">
	              <li className="nav-item">
	                <a className="nav-link" href="javascript:;" onClick={this.home}>Home</a>
	              </li>
	              <li className="nav-item">
	                <a className="nav-link" href="javascript:;" onClick={this.scrollToAbout}>About</a>
	              </li>
	              <li className="nav-item">
	                <a className="nav-link" href="javascript:;" onClick={this.scrollToPortfolio}>Portfolio</a>
	              </li>
	              <li className="nav-item">
	                <a className="nav-link" href="javascript:;" onClick={this.scrollToContact}>Contact</a>
	              </li>
	            </ul>
	        </div>
	      </nav>
	    </div>
	);
	}
}
export default NavBar;