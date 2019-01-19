import React from 'react';

const ControlPanel = (props) => {

	return (
		<div className="control-panel">
			<div className="buttons">
				{!!props.sketchType ? (
					<button name={null} onClick={props.selectSketch}>
						Clear
					</button>
				) : null}

				<button onClick={props.selectSketch} name="circle" id={props.sketchType == "circle" ? "active" : "inactive"}>
					Circle
				</button>

				<button onClick={props.selectSketch} name="coords" id={props.sketchType == "coords" ? "active" : "inactive"}>
					Coords
				</button>
			</div>
		</div>
	);
};

export default ControlPanel;
