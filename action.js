// Author: Austin Bearden
// Date Created: Wednesday, October 17th, 2018
// Purpose: Create and HTML5 Mobile Game
// Description: Game is about saving unmaned jets by jumping aboard them and flying them safely

function Background() {
    theBackground = new Sprite(scene, "SkyGrass.png", 950, 450);
    theBackground.setSpeed(0);
    theBackground.setPosition(475, 225);
    
    return theBackground;
}

function Character() {
    theCharacter = new Sprite(scene, "StickMan.png", 55.4, 100);
    theCharacter.setSpeed(0);
    theCharacter.setPosition(50, 400);
    //adding bounding specifications for my Character
    theCharacter.setBoundAction(WRAP);
    theCharacter.hasCollided = false;

    theCharacter.checkCharacterTouchMove = function() {
        // we want joystick to control guy before collision
        if(!this.hasCollided) {
            var virtKeys = true;
            var joyDX = joystick.getDiffX();
            var joyDY = joystick.getDiffY();

            this.changeXby(joyDX);
            this.changeYby(joyDY);

        }
      
    };

    //return theCharacter when access Character class
    return theCharacter;
}

function Plane() {
    thePlane = new Sprite(scene, "AirPlan.png", 150, 100);
    thePlane.setSpeed(2);
    thePlane.setPosition(0, 200);
    //score variable
    thePlane.score = 0;
    //boolean variable that 
    thePlane.boolWin = false;

    thePlane.checkPlaneTouchMove = function() {

        // we want joystick to control airplane after collision
        if(character.hasCollided) {
            //var virtKeys = true;
            var joyNewDX = joystick.getDiffX();
            var joyNewDY = joystick.getDiffY();

            this.changeXby(joyNewDX);
            this.changeYby(joyNewDY);
        }

    };

    //method for stopping the movement of the plan
    thePlane.stopMoving = function() {
        thePlane.setSpeed(0);
    };

    return thePlane;
}

function Bomb() {
    theBomb = new Sprite(scene, "bomb.png", 25, 30);
    theBomb.setMoveAngle(180);
    theBomb.setSpeed(2);
    theBomb.setPosition(50, 50);

    return theBomb;
}

function Tree() {
    theTree = new Sprite(scene, "Tree.png", 200, 300);
    theTree.setSpeed(0);
    theTree.setPosition(550, 305);

    return theTree;
}

function LandingPad() {
    theLandingPad = new Sprite(scene, "LandingPad.png", 275, 30);
    theLandingPad.setSpeed(0);
    theLandingPad.setPosition(750, 440);

    return theLandingPad;
}

function LostGame() {
    theLostGame = new Sprite(scene, "YouLost.png", 450, 450);
    theLostGame.setSpeed(0);
    theLostGame.setPosition(440, 240);
    console.log("I am here");

    return theLostGame;
}

function WinGame() {
    theWinGame = new Sprite(scene, "YouWin.png", 450, 450);
    theWinGame.setSpeed(0);
    theWinGame.setPosition(440, 240);

    return theWinGame;
}

// checkGuyPlaneCollision function
function checkGuyPlaneCollision() {
    if(character.collidesWith(plane)) {
        //change value of hasCollided variable
        character.hasCollided = true;
    }
    if(character.hasCollided) {
        character.hide();
        plane.changeImage("AirPlanWithMan.png");
    }
}

// checkPlanePadCollision function
function checkPlanePadCollision() {
    if(plane.collidesWith(landingPad)) {
        plane.setSpeed(0);
        plane.boolWin = true;
    } else {
        // nothing
    }

    if(plane.boolWin) {
        winGame.show();
    }
}

// bombPlaneCollision
function checkBombPlaneCollision() {
    if(bomb.collidesWith(plane)) {
        plane.score = plane.score + 1;
        console.log(plane.score);
    }
}

// planeTreeCollision
function checkPlaneTreeCollision() {
    if(plane.collidesWith(tree)) {
        plane.score = plane.score + 1;
        console.log(plane.score);
    }
}

// checks for plane's death
function planeDead() {
    if(plane.score > 0) {
        //game over
        console.log("Plane dead!!");
        lostGame.show();
        scene.stop();

    }
}

