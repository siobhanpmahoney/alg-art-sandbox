export const bezier = (p) => {
  p.setup = () => {
    p.createCanvas(720, 400)
  }

  p.draw = () => {
    p.background(0);
    p.noFill()

    let line_a_x_1 = p.width * 0.1
    let line_a_y_1 = p.height*0.1
    let line_a_x_2 = p.width*0.85
    let line_a_y_2 = p.height*0.25

    let line_b_x_1 = p.width * 0.1
    let line_b_y_1 = p.height * 0.8
    let line_b_x_2 = p.width*0.85
    let line_b_y_2 = p.height * 0.95



    p.stroke(285, 32, 0);
    p.line(line_a_x_1, line_a_y_1, line_a_x_2, line_a_y_2);
    p.line(line_b_x_1, line_b_y_1, line_b_x_2, line_b_y_2)


    p.stroke(153, 0, 285)
    p.strokeWeight(4)
    p.bezier(line_a_x_1, line_a_y_1, line_a_x_2, line_a_y_2, line_b_x_1, line_b_y_1, line_b_x_2, line_b_y_2)


  }
}
