let addEndGameWithObstacle = false;
let addEndGameWithClick = false;
let addEndGameWithPassObstacle = false;

let addCactusWithClick = false;
let addCactusRandom = false;
let setObstacle = false;

let endGame = false;
let endLoop = false;

let addJump = false;


let addJumpWithClick = false;
let addJumpWithObstacle = false;

let addCactus = false;

let countScoreWithCactusCrash = false;
let countScoreWithCactusPass = false;
let countScoreWithClick = false;
let countScoreWithRun = false;

let showDino = false;
let runDino = false;

let isClickCalled = false;

let controlNum = 0000; // 4 bit binary number

let scenerio = 0;
let clickScenerio = 0;

let isclicked = false;
let hitToObstacle = false;
let passObstacle = false;
let isRunning = false;


let clickEnded = false;
let hitToObstacleEnded = false;
let passObstacleEnded = false;
let isRunningEnded = false;

function whenClick() {
    isclicked = true;
    hitToObstacle = false;
    passObstacle = false;
    isRunning = false;
}

function whenHitToObstacle() {
    hitToObstacle = true;
    isclicked = false;
    passObstacle = false;
    isRunning = false;
}

function whenPassObstacle() {
    hitToObstacle = false;
    isclicked = false;
    passObstacle = true;
    isRunning = false;

}

function whenRun() {
    hitToObstacle = false;
    isclicked = false;
    passObstacle = false;
    isRunning = true;



}


function jump() {
    //addJump = true;
    if (isclicked & !clickEnded) {
        //   addJump =true;
        addJumpWithClick = true;
        clickEnded = true;
        // addJumpWithObstacle = false;
    } else if (hitToObstacle & !hitToObstacleEnded) {
        addJumpWithObstacle = true;
        hitToObstacleEnded = true;
        //addJumpWithClick = false;
    } else {
        console.log("It might be better to use it under other cards.");
    }


}

function finishGame() {
    //endGame=true;
    if (hitToObstacle & !hitToObstacleEnded) {
        addEndGameWithObstacle = true;
        hitToObstacleEnded = true;
        addEndGameWithPassObstacle= false; 
        addEndGameWithClick = false;
    } else if (isclicked & !clickEnded) {
        addEndGameWithClick = true;
        clickEnded = true;
        addEndGameWithPassObstacle = false;
        addEndGameWithObstacle = false;
    } else if (passObstacle & !passObstacleEnded) {
        addEndGameWithPassObstacle = true; 
        passObstacleEnded = true;
        addEndGameWithObstacle = false;
        addEndGameWithClick= false;

    } else {
        console.log("It might be better to use it under other cards.");
    }
}

function setObstacles() {
    if (isclicked & !clickEnded) {
        addCactusWithClick = true;
        setObstacle = false;
        clickEnded = true;
    } else {
        setObstacle = true;
        addCactusWithClick = false;
    }
}

function setDino() {
    if(isRunning & !isRunningEnded){
        showDino = true;
        runDino = false;
        addJump = false;
    }if(!isRunning){
        window.alert("Dino ancak oyun başlayınca gelebilir ;)");
    }
}

function goDino() {
    if(isRunning  & !isRunningEnded){
        runDino = true;
       // isRunning = false;
        if(showDino){
            isRunningEnded= true;
        }
            
    }
    if(!showDino){
        window.alert("Dino'yu çağırmadan ona koşmayı öğretemeyiz ;)");
    }
   
    
    //addJump = false; there is no need for that. It can first learn how to jumo then can run
}

function setScore() {
    if (hitToObstacle & !hitToObstacleEnded) {
        countScoreWithCactusPass = false;
        countScoreWithClick = false;
        countScoreWithCactusCrash = true;
        hitToObstacleEnded = true;
    } else if (isclicked & !clickEnded) {
        countScoreWithCactusCrash = false;
        countScoreWithCactusPass = false;
        countScoreWithClick = true;
        clickEnded = true;
    } else if (passObstacle & !passObstacleEnded) {
        countScoreWithCactusCrash = false;
        countScoreWithClick = false;
        countScoreWithCactusPass = true;
        passObstacleEnded = true;
    } else {
        countScoreWithRun = true;
    }
}
function initInterpreter() {
    const fuseOptions = {
        keys: ['title'],
        shouldSort: true,
        includeScore: true
    };
    fuse = new Fuse(codeList, fuseOptions);
}

function addCodeInput(code_text) {
    let code_sub = "";
    if (code_text.indexOf("\n") > 0) {
        code_sub = code_text.substring(0, code_text.indexOf("\n"));
    } else {
        code_sub = code_text;
    }
    code_sub = code_sub.toLowerCase();
    code_sub = code_sub.replace(/\s+/g, " ").trim();
    let result = fuse.search(code_sub.replace(/\s+/g, " ").trim().substring(0, (code_sub.indexOf(':') > 0) ? code_sub.indexOf(':') : code_sub.length));
    let resultCode = result[0].item.code;
    let inputs = [];
    if (result[0].item.input === "numeric") {
        inputs.push(code_sub.match(/\d+/g).map(Number));
        resultCode = resultCode.format(inputs);
    } else if (result[0].item.input === "string") {
        let index = code_sub.indexOf(":");
        resultCode = resultCode.format(code_sub.substring(index + 1, code_sub.length).trim());
    }
    eval(resultCode);
}

function runCodeFromTM(idList) {

    addJumpWithClick = false;
    addJumpWithObstacle = false;
    addEndGameWithPassObstacle = false;

    addCactus = false;

    countScoreWithCactusCrash = false;
    countScoreWithCactusPass = false;
    countScoreWithClick = false;
    countScoreWithRun = false;

    showDino = false;
    runDino = false;

    isClickCalled = false;

    isclicked = false;
    hitToObstacle = false;
    passObstacle = false;
    isRunning = false;


    clickEnded = false;
    hitToObstacleEnded = false;
    passObstacleEnded = false;
    isRunningEnded = false;




    for (let i = 0; i < idList.length; i++) {
        eval(idList[i].replace(/[0-9]/g, '') + "()");
    }
}

function runP5Code() {
    new p5(sketch, 'game-container');
}


