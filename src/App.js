import React from 'react';
import * as sketches from './sketches';
import Canvas from './components/Canvas';
import ControlPanel from './components/ControlPanel'
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sketchType: null
		};
	}

	selectSketch = (event) => {
    debugger
		let selection = event.target.name;
		this.setState({
			sketchType: selection
		});
	};

	render() {

		return (
			<div>
				<ControlPanel selectSketch={this.selectSketch} sketchType={this.state.sketchType}/>
				<div className="sketch">
					<Canvas sketchType={this.state.sketchType} />
				</div>
			</div>
		);
	}
}

export default App;
