// This game was implemented from following source at the beginning of the code. 
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

const sketch = p5 => {
    let gameOver = false;
    let gameStart = false;
    let unicorn;
    let trains = [];
    let animation = [];
    let tImg;
    let bImg;
    let textFont;
    let score = 0;
    let scoreText;
    let highScore = 0;
    let highScoreText;
    let counter = 0;

    let isAlerted=false;

    for (let i = 1; i < 8; i++) {
        let imageName = '../dino/assets/dinoImages/Run (' + i + ').png';
        console.log(imageName);
        let image = p5.loadImage(imageName);

        animation.push(image);
    }

    tImg = p5.loadImage('../dino/assets/cacti.png');
    bImg = p5.loadImage('../dino/assets/background.png');

    function resetSketch() {
        gameStart = false;
        gameOver = false;
        scenerio = 0;
        score = 0;
        trains.splice(0, trains.length);
        p5.loop();
        unicorn = new Unicorn(p5, animation);
        p5.draw();
    }

    p5.setup = () => {


        let canvas = p5.createCanvas(650, 450);


        canvas.mousePressed(canvasClick);
        unicorn = new Unicorn(p5, animation);
        canvas.touchStarted(canvasTouch);
        canvas.touchStarted(canvasTouch);

        p5.textSize(15);
        p5.fill(0, 0, 0);
        textFont = p5.loadFont('../dino/assets/PressStart2P-Regular.otf');
        p5.textFont(textFont);
        resetSketch();
    }

    p5.draw = () => {
      
        p5.background(bImg);
       
        if (showDino) {
            unicorn.show();
            unicorn.move();
            if (runDino) {
                unicorn.animate();
                if (((counter % 12) === 0) && countScoreWithRun) {
                    score++;
                    if (score > highScore) {
                        highScore = score;
                    }
                    scoreText = scoreTextEditor(score);
                    highScoreText = highScoreTextEditor(highScore);
                }
            }
        }
       

        for (let t of trains) {
            t.move();
            t.show();
            if (addEndGameWithObstacle) {
                if (unicorn.hits(t)) {
                    p5.noLoop();
                    gameOver= true;
                }
            }
            if (addEndGameWithObstacle) {
                if (unicorn.hits(t)) {
                    p5.noLoop();
                    gameOver = true;
                }
            }

            if(addEndGameWithPassObstacle){
                if (t.xPosition() == -10 && gameOver == false) {
                    p5.noLoop();
                    gameOver = true;
                }
            }
            if (countScoreWithCactusCrash) { // increase score by 1 if dino hits to obstacle. 
                if (unicorn.hits(t)) {
                    score++;
                    if (score > highScore) {
                        highScore = score;
                    }
                    scoreText = scoreTextEditor(score);
                    highScoreText = highScoreTextEditor(highScore);
                }
            }

            if (addJumpWithObstacle) {
                if (unicorn.hits(t)) {
                    unicorn.jump();
                }
            }
            if (countScoreWithCactusPass) {
                if (t.xPosition() == 50 && gameOver == false) {
                    console.log("cactus passed.");
                    score++;
                    if (score > highScore) {
                        highScore = score;
                    }
                    scoreText = scoreTextEditor(score);
                    highScoreText = highScoreTextEditor(highScore);
                }
            }
        }
        counter++;
        scoreText = scoreTextEditor(score);
        highScoreText = highScoreTextEditor(highScore);
        p5.text(scoreText, 500, 100);
        p5.text(highScoreText, 350, 100);
        if (setObstacle) {
            if (p5.random(1) < 0.008) {
                trains.push(new Train(p5, tImg));
                console.log(trains.length);
            }
            if (trains.length >= 5) {
                // console.log(trains.length);
                trains.splice(0, trains.length - 3);
                console.log(trains.length);
            }
        }
        
    }

    const canvasClick = () => {
        if (p5.mouseButton === 'left') {
            if (addJumpWithClick) {
                unicorn.jump();
            }
            if (addJumpWithClick) {
                unicorn.jump();

            }
            if (gameOver === false) { // eğer whenHitstoObstacle çağrılmamışsa    
                if (addJumpWithClick) {
                    unicorn.jump();

                }
            }
            if (addCactusWithClick) {
                trains.push(new Train(p5, tImg));
            }
            if (addEndGameWithClick) {
                p5.noLoop();
            }
            if (gameStart === false) {
                gameStart = true;
            }
            if (countScoreWithClick) {
                score++;
                if (score > highScore) {
                    highScore = score;
                }
                scoreText = scoreTextEditor(score);
                highScoreText = highScoreTextEditor(highScore);

            }
        }
    };

    const canvasTouch = () => {  // CHECK

        if (addJumpWithClick) {
            unicorn.jump();
        }
        if (addJumpWithClick) {
            unicorn.jump();

        }
        if (gameOver === false) { // eğer whenHitstoObstacle çağrılmamışsa    
            if (addJumpWithClick) {
                unicorn.jump();

            }
        }
        if (addCactusWithClick) {
            trains.push(new Train(p5, tImg));
        }
        if (addEndGameWithClick) {
            p5.noLoop();
        }
        if (gameStart === false) {
            gameStart = true;
        }
        if (countScoreWithClick) {
            score++;
            if (score > highScore) {
                highScore = score;
            }
            scoreText = scoreTextEditor(score);
            highScoreText = highScoreTextEditor(highScore);
        }
    };
    p5.keyPressed = (e) => {
        if (e.key === ' ') {
            if (addJumpWithClick) {
                unicorn.jump();
            }
            if (gameOver === false) {

            }
            if (gameStart === false) {
                gameStart = true;
            }
            if (addEndGameWithClick) {
                p5.noLoop();
            }
            if (countScoreWithClick) {
                score++;
                if (score > highScore) {
                    highScore = score;
                }
                scoreText = scoreTextEditor(score);
                highScoreText = highScoreTextEditor(highScore);
            }

            if (addCactusWithClick) {
                trains.push(new Train(p5, tImg));
            }
            if (gameStart === false) {
                gameStart = true;
            }
        }
        if (e.key === 'r') {
            resetSketch();
            if (gameOver) {

            }
        }

    }



    function scoreTextEditor(score) {
        if (score <= 9) {
            scoreText = '0000' + score;
        } else if (score > 9 && score <= 99) {
            scoreText = '000' + score;
        } else if (score > 99 && score <= 999) {
            scoreText = '00' + score;
        } else if (score > 999 && score <= 9999) {
            scoreText = '0' + score;
        } else {
            scoreText = score;
        }
        return scoreText;
    }
    function highScoreTextEditor(highScore) {
        if (highScore <= 9) {
            highScoreText = 'HI 0000' + highScore;
        } else if (highScore > 9 && highScore <= 99) {
            highScoreText = 'HI 000' + highScore;
        } else if (highScore > 99 && highScore <= 999) {
            highScoreText = 'HI 00' + highScore;
        } else if (highScore > 999 && highScore <= 9999) {
            highScoreText = 'HI 0' + highScore;
        } else {
            highScoreText = 'HI ' + highScore;
        }
        return highScoreText;
    }
}