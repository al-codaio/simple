import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {

	render() {
		return (
			<div className="app-nav">
				<div 
					className={ this.props.activeScreenIndex === 1 ? "nav-item screen1 active-nav" : "nav-item screen1" } >
					<Link to="/screen1">Screen 1</Link>
				</div>
				<div 
					className={ this.props.activeScreenIndex === 2 ? "nav-item screen2 active-nav" : "nav-item screen2" } >
					<Link to="/screen2">Screen 2</Link>
				</div>
				<div 
					className={ this.props.activeScreenIndex === 3 ? "nav-item screen3 active-nav" : "nav-item screen3" } >
					<Link to="/screen3">Screen 3</Link>
				</div>
			</div>
		)
	}
}

export default Nav