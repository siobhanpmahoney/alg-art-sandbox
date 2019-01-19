import React from 'react';
import {sketchObj} from './sketches/index';
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

		let selection = event.target.name;
		this.setState({
			sketchType: sketchObj[selection]
		});
	};

	render() {
    // if (!sketches) {
    //   return <div>loading...</div>
    // } else {

		return (
			<div>
				<ControlPanel sketches={Object.keys(sketchObj)} selectSketch={this.selectSketch} sketchType={this.state.sketchType}/>
				<div className="sketch">
					<Canvas sketchType={this.state.sketchType} />
				</div>
			</div>
		)
  // }
	}
}

export default App;
