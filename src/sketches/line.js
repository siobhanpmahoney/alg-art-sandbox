export const line = (p) => {
  p.setup = () => {
    p.createCanvas(720, 400)
  }

  p.draw = () => {
  

    p.stroke(0, 153, 255);
    p.line(0, p.height*0.33, p.width, p.height*0.33);

  }
}
