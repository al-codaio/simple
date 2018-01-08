import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import { EventEmitter } from 'events';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import './styles/app.css';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			screenIndex: 1
		}
	}

	componentWillMount() {
		this.eventEmitter = new EventEmitter()
		this.eventEmitter.addListener("navigateScreen", ({screenIndex}) => {
			this.updateScreen({newScreenIndex: screenIndex})
		})
	}

	updateScreen({newScreenIndex}) {
		this.setState({ screenIndex: newScreenIndex })
	}

	render() {
		// var ActiveScreen;
		// if (this.state.screenIndex === 1) {
		// 	ActiveScreen = <Screen1 myText={"hello"}/>
		// }
		// if (this.state.screenIndex === 2) {
		// 	ActiveScreen = <Screen2 myText={"world"}/>
		// }
		// if (this.state.screenIndex === 3) {
		// 	ActiveScreen = <Screen3 myText={"my name is bob"}/>
		// }

		return (
			<div className="app">
				<div className="app-header"></div>
				<div className="app-wrapper">
					<Nav 
						eventEmitter={ this.eventEmitter }
						activeScreenIndex={ this.state.screenIndex }/>
					<div className="main-content">
						<div>
							<Route exact path="/" render={ (props) => 
								<Screen2 eventEmitter={ this.eventEmitter } {...props} /> 
							} /> 
							<Route path="/screen1" render={ (props) => 
								<Screen1 eventEmitter={ this.eventEmitter } {...props} /> 
							} /> 
							<Route path="/screen2" render={ (props) => 
								<Screen2 eventEmitter={ this.eventEmitter } {...props} /> 
							} /> 
							<Route path="/screen3" render={ (props) => 
								<Screen3 eventEmitter={ this.eventEmitter } {...props} /> 
							} /> 
						</div>
					</div>
				</div>

			</div>
		)
	}
}

ReactDOM.render(
	<BrowserRouter>		
		<App />
	</BrowserRouter>, 
	document.getElementById('root')
);