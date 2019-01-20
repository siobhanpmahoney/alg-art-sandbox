export const point = (p) => {
  p.setup = () => {
    p.createCanvas(720, 400)
  }

  p.draw = () => {
    p.background(30);
    p.noFill()

// p.stroke: defines color by passing one of the following parameter options
// p.stroke(red/hue, green/saturation, blue/brightness, [alpha]) -
// p.stroke(colorValue)
// p.stroke(grey, [alpha])
// p.stroke([values]) - array containing the red,green,blue & and alpha components of the color
// p.stroke(color)
    p.stroke(153, 0, 285)

// p.strokeWeight(pxValue) - sets stroke weight
    p.strokeWeight(5)

    // point(x-coordinate, y-coordinate)
    p.point(p.width * 0.25, p.height * 0.25)
    p.point(p.width * 0.25, p.height * 0.75)
    p.point(p.width * 0.75, p.height * 0.75)
    p.point(p.width * 0.75, p.height * 0.25)
  }


}
