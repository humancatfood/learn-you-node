/*global console:true*/
/*global process:true*/

var challenge = 4;

(function (f) {
    'use strict';


    var functions = [

        function challenge1 () {
            console.log('HELLO ES6');
        },


        function challenge2 () {

            var name = process.argv[2] || '';
            console.log(`Hello, ${ name }!`);
            console.log(`Your name lowercased is "${ name.toLowerCase() }".`);

        },


        function challenge3 () {

            var inputs = process.argv.slice(2);
            var output = inputs.reduce(
                (result, item) => result + item[0], ''
            );

            console.log(`[${ inputs }] becomes "${ output }"`);

        },


        function challenge4 () {

            var foot = {

                kick: function () {
                    this.yelp = 'Ouch!';
                    setImmediate(() => console.log(this.yelp) );
                }

            };

            foot.kick();

        }


    ];


    functions[f - 1].call();

}(challenge));
