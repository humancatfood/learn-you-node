/*global console:true*/
/*global process:true*/

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

        },


        function challenge5 () {

            var inputs = process.argv.slice(2);

            console.log(`The minimum of [${ inputs }] is ${ Math.min( ...inputs ) }`);

        },


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


        function challenge7 () {

            module.exports = function midpoint(lower = 0, upper = 1) {

                return lower + (upper - lower) / 2;

            };

        },


        function challenge8 () {

            module.exports = function makeImportant(msg, count = msg.length) {

                for (var i = 0; i < count; i += 1)
                {
                    msg += '!';
                }

                return msg;

            };

        },


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
