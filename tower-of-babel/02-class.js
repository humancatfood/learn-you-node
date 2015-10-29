(function () {
    'use strict';

    // OLD:
    /**
    var Character = function(x, y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
    };


    Character.prototype.damage = function() {
        this.health_ = this.health_ - 10;
    };


    Character.prototype.getHealth = function() {
        return this.health_;
    };


    Character.prototype.toString = function() {
        return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
    };

    */

    // NEW

    class Character
    {

        constructor (x, y)
        {
            this.x = x;
            this.y = y;
            this.health = 100;
        }

        damage ()
        {
            this.health -= 10;
        }

        getHealth ()
        {
            return this.health;
        }

        toString ()
        {
            return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
        }

    }


     //then use the class like this:

     var x = process.argv[2];
     var y = process.argv[3];
     var character = new Character(+x, +y);
     character.damage();
     console.log(character.toString());



}());
