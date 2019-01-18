export const circle = p => {
	p.setup = () => {
		p.createCanvas(240, 280);
	};

	p.draw = () => {
		if (p.mouseIsPressed) {
			p.fill(0);
		} else {
			p.fill(255);
		}
		p.ellipse(
			p.mouseX,
			p.mouseY,
			80,
			80
		);
	};
};
