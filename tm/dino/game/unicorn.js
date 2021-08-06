// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

class Unicorn { // Dinosaur object   
  
  constructor(p5,ImgArr) {
    this.p5 = p5;
    //this.image = uImg;
    this.r = 100;
    this.x = 50;
    this.y = 450 - this.r;
    this.vy = 0;
    this.gravity = 3;
    this.ImgArr=ImgArr;
    this.len = ImgArr.length;
    this.index=0;
    this.speed= 0.18;
  }

  jump() {
    if (this.y == 450 - this.r) {
      this.vy = -35;
    }
  }

  hits(train) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = train.x + train.r * 0.5;
    let y2 = train.y + train.r * 0.5;
    return this.p5.collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = this.p5.constrain(this.y, 0, 450 - this.r);
  }

  show() {
    let index = this.p5.floor(this.index) % this.len;
    this.p5.image(this.ImgArr[index], this.x, this.y, this.r, this.r);
  //  this.p5.image(this.image, this.x, this.y, this.r, this.r);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);  
  }
  animate() {
    this.index += this.speed;
   // this.x += this.speed * 15;
  }
 
}