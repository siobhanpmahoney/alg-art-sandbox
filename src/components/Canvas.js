import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import {circle} from '../sketches/circle';


class Canvas extends React.Component {
	render() {
		const sketch = this.props.sketchType
		return (
			<div className="canvas">
				{!!this.props.sketchType ? (
					<P5Wrapper sketch={circle} />
				) : (
					<div className="no-sketch-msg">
						Pick a sketch
					</div>
				)}
			</div>
		);
	}
}

export default Canvas;

// <P5Wrapper
// 	sketch={Circle}
// />
