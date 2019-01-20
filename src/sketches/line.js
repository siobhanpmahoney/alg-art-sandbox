export const line = (p) => {
  p.setup = () => {
    p.createCanvas(720, 400)
  }

  p.draw = () => {
    p.background(0);
    p.noFill()
    p.stroke(153, 0, 285)
    p.strokeWeight(4)
    p.line(p.width * 0.25, p.height*0.25, p.width*0.75, p.height*0.75);

    p.stroke(153, 0, 285)
    p.strokeWeight(4)
    p.line(p.width * 0.75, p.height * 0.25, p.width*0.25, p.height * 0.75)


  }
}
