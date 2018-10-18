// Author: Austin Bearden
// Date Created: Wednesday, October 17th, 2018
// Purpose: Create and HTML5 Mobile Game
// Description: Game is about saving unmaned jets by jumping aboard them and flying them safely


function Character() {
    theCharacter = new Sprite(scene, "StickMan.png", 55.4, 100);
    theCharacter.setSpeed(0);
    theCharacter.setPosition(50, 50);

    theCharacter.checkTouchMove = function() {
        console.log("Hey man, I am in the checkTouchMove() method!!");
        var joyDX = joystick.getDiffX();
        var joyDY = joystick.getDiffY();

        if(Math.abs(joyDX) > 0 || Math.abs(joyDX) > 0) {
            thisCharacter.changeXby(50 + joyDX);
            thisCharacter.changeYby(50 + joyDY);
        } else {
            // do nothing
        }
    };

    //return theCharacter when access Character class
    return theCharacter;
}
