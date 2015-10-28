/*global console:true*/
/*global process:true*/

(function (f) {
    'use strict';


    var functions = [


        /**
         * initial
         */
        function challenge1 () {
            console.log('HELLO ES6');
        },


        /**
         * template strings:
         *
         * use backticks `
         *
         * instead of quotes '
         *
         * to create a template string with placeholders within
         *
         * ${  }
         *
         */
        function challenge2 () {

            var name = process.argv[2] || '';
            console.log(`Hello, ${ name }!`);
            console.log(`Your name lowercased is "${ name.toLowerCase() }".`);

        },


        /**
         * Arrow functions:
         *
         * (x, y) => x + y;
         *
         * corresponds to lambda functions in python
         */
        function challenge3 () {

            var inputs = process.argv.slice(2);
            var output = inputs.reduce(
                (result, item) => result + item[0], ''
            );

            console.log(`[${ inputs }] becomes "${ output }"`);

        },


        /**
         * Arrow functions automatically bind to the this-context of the surrounding scope
         */
        function challenge4 () {

            var foot = {

                kick: function () {
                    this.yelp = 'Ouch!';
                    setImmediate(() => console.log(this.yelp) );
                }

            };

            foot.kick();

        },


        /**
         * Variadic arguments:
         *
         * allows passing an array as expanded arguments.
         *
         * var args = [1,2,3,4,5];
         * fn(...args);
         *
         * corresponds to:
         *
         * fn(1,2,3,4,5);
         *
         */
        function challenge5 () {

            var inputs = process.argv.slice(2);

            console.log(`The minimum of [${ inputs }] is ${ Math.min( ...inputs ) }`);

        },



        /**
         * Variadic parameters:
         *
         * function fn (...args)
         * {
         *     console.log(args);
         * }
         *
         * corresponds to
         *
         * function fn ()
         * {
         *     console.log(arguments);
         * }
         *
         * but is more explicit and only captures arguments that aren't stated yet:
         *
         *
         * function fn (a, b, ...rest)
         * {
         *     ...
         * }
         *
         */
        function challenge6 () {

            module.exports = function average( ...inputs ) {

                var sum = 0;
                var len = inputs.length;
                for (var i = 0, e = len; i < e; i += 1)
                {
                    sum += inputs[i];
                }

                return sum / len;

            };

        },


        /**
         * Default params:
         *
         * Exactly the same as in python.
         */
        function challenge7 () {

            module.exports = function midpoint(lower = 0, upper = 1) {

                return lower + (upper - lower) / 2;

            };

        },


        /**
         * Default parameters can be previous parameters!
         */
        function challenge8 () {

            module.exports = function makeImportant(msg, count = msg.length) {

                for (var i = 0; i < count; i += 1)
                {
                    msg += '!';
                }

                return msg;

            };

        },


        /**
         * Tagged Template Strings
         *
         * fn`ab ${x} cd ${y} ef`;
         *
         * corresponds to
         *
         * fn(['ab ', ' cd ', ' ef'], x, y);
         */
        function challenge9 () {

            console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

            var escapes = {
                '\'': '&apos',
                '"': '&quot',
                '<': '&lt',
                '>': '&gt',
                '&': '&amp'
            };

            function html (str, ...args)
            {
                return args.reduce(function (result, arg, i) {

                    arg = arg
                        .replace(/&/g, '&amp;')
                        .replace(/'/g, '&apos;')
                        .replace(/"/g, '&quot;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');

                    return result + arg + str[i+1];

                }, str[0]);
            }

        }


    ];


    functions[f - 1].call();

}( 9 ));
