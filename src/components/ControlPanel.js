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

				{props.sketches.map((sk) => {
					return (
						<button onClick={props.selectSketch} key={sk} name={sk} className={props.sketchType == sk ? "active" : "inactive"}>
							{sk}
						</button>
					)
				})}
			</div>
		</div>
	);
};

export default ControlPanel;
