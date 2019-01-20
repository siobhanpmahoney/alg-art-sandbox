export const rect = (p) => {
  p.setup = () => {
    p.createCanvas(720, 400)
  }

  p.draw = () => {
    p.background(0);
    p.noFill()

    p.stroke(153, 0, 285)
    p.strokeWeight(4)

// p.rect(x-coordinate, y-coordinate, width, height)
    p.rect(p.width * 0.25, p.height * 0.25, p.width * 0.5, p.height * 0.5)
  }
}
