import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

class Canvas extends React.Component {
	render() {
		return (
			<div className="canvas">
				{!!this.props
					.sketch ? (
					<P5Wrapper sketch={this.props.sketch} />
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
