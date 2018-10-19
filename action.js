// Author: Austin Bearden
// Date Created: Wednesday, October 17th, 2018
// Purpose: Create and HTML5 Mobile Game
// Description: Game is about saving unmaned jets by jumping aboard them and flying them safely


function Character() {
    theCharacter = new Sprite(scene, "StickMan.png", 55.4, 100);
    theCharacter.setSpeed(0);
    theCharacter.setPosition(50, 400);
    //adding bounding specifications for my Character
    theCharacter.setBoundAction(WRAP);
    theCharacter.hasCollided = false;

    theCharacter.checkCharacterTouchMove = function() {
        console.log("Hey man, I am in the checkTouchMove() method!!");

        // we want joystick to control guy before collision
        console.log(!this.hasCollided);
        if(!this.hasCollided) {
            console.log("Yeah man!!");
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
    thePlane = new Sprite(scene, "AirPlaneWithoutMan.png", 100, 100);
    thePlane.setSpeed(2);
    thePlane.setPosition(0, 50);

    thePlane.checkPlaneTouchMove = function() {

        // we want joystick to control airplane after collision
        console.log(character.hasCollided);
        if(character.hasCollided) {
            console.log("Hey man!!!");
            //var virtKeys = true;
            var joyNewDX = joystick.getDiffX();
            var joyNewDY = joystick.getDiffY();

            this.changeXby(joyNewDX);
            this.changeYby(joyNewDY);
        }

    };


    return thePlane;
}

// checkCollision function
function checkGuyPlaneCollision() {
    if(character.collidesWith(plane)) {
        //change value of hasCollided variable
        character.hasCollided = true;
    }
    if(character.hasCollided) {
        character.hide();
        plane.changeImage("AirPlaneWithMan.png");
    }
}
