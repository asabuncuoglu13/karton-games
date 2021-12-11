// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

class Train {   // Cactuses 
 
  constructor(p5,tImg) {
    this.p5= p5;
    this.image = tImg;
    this.r = 75;
    this.x = 640;
    this.y = 450 - this.r;
  }

  move() {
    this.x -= 10;
  }
  xPosition() {
    return this.x;
  }
  show() {
    this.p5.image(this.image, this.x, this.y, this.r, this.r);

 //   this.p5.fill(255, 50);
   // this.p5.ellipseMode(20,20,20,20);
    //this.p5.ellipse(this.x, this.y, this.r, this.r);
  }

}