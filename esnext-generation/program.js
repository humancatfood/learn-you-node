/*global console:true*/
/*global module:true*/
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

             module.exports = function makeCounter(someObj, max) {

                 var it = 1, done = false;
                 max = max || 10;

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


        /**
         * Use for (var i of iterable) { .. } to filter any iterable.
         *
         */
        function challenge2 () {

            module.exports = function filterForNumbers(iterable) {

                var result = [];

                // loop over iterable, adding numeric values to a new array
                // then return the new array of numbers
                for (var item of iterable)
                {
                    if (typeof item === 'number')
                    {
                        result.push(item);
                    }
                }

                return result;

            };

        },


        /**
         * Generate editable iterator
         *
         */
        function challenge3 () {

            // return an Iterator for even numbers if isEven is true
            // or, return an Iterator for odd numbers if isEven is false
            // If `.next(swap)` receives `true`, swap between even <-> odd
            module.exports = function generate(isEven) {

                var num = isEven ? 0 : -1;

                return {

                    next: function next(swap) {

                        num += swap ? 1 : 2;
                        return {
                            value: num
                        };

                    }

                };

            };

        }

    ];


    functions[f - 1].call();

}( 3 ));
