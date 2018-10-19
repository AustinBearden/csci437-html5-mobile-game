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
        
        if(joyDX > 0 || joyDX < 0 || joyDY > 0 || joyDY < 0) {
            this.changeXby(joyDX/50);
            this.changeYby(joyDY/50);
        } else {
            // do nothing
        }
    };

    //return theCharacter when access Character class
    return theCharacter;
}
