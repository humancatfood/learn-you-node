/*global console:true*/
/*global process:true*/

(function (f) {
    'use strict';


    var functions = [


        /**
         * initial
         *
         * take an object and turn it into an iterator that iterates over the numbers from 1 to 10
         */
        function challenge1 () {

             module.exports = function makeCounter(someObj, max = 10) {

                 var it = 1, done = false;

                 someObj.next = function() {

                     if (it > max)
                     {
                         done = true;
                     }
                     else
                     {
                         it += 1;
                     }

                     return {
                         value: it,
                         done: done
                     };
                };

             };


        },


    ];


    functions[f - 1].call();

}( 1 ));
