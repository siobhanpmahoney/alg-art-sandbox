export const point = (p) => {
  p.setup = () => {
    p.createCanvas(720, 400)
  }

  p.draw = () => {
    p.background(0);
    p.noFill()

    // p.stroke(555)

    // point(x-coordinate, y-coordinate)
    p.point(p.width * 0.5, p.height * 0.5)
    p.point(p.width * 0.5, p.height * 0.25)
  }


}
