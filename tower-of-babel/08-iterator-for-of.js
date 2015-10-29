/*global process:true*/

(function () {
    'use strict';

    /**
     *  List the numbers from 1 to the max (passed in using process.argv).
     *  However for every number that is divisible by 3 you write Fizz and for
     *  every number that is divisible by 5 you write Buzz and for every number
     *  that is divisible by both 3 and 5 you write FizzBuzz.
     *
     *  Here is an example.
     *
     *      // 1
     *      // 2
     *      // Fizz
     *      // 4
     *      // Buzz
     *      // Fizz
     *      // 7
     *      // 8
     *      // Fizz
     *      // Buzz
     *      // 11
     *      // Fizz
     *      // 13
     *      // 14
     *      // FizzBuzz
     *      // 16
     *      // 17
     *      // Fizz
     *      // 19
     *      // Buzz
     *      // Fizz
     *      // 22
     *      // 23
     *      // Fizz
     *      // Buzz
     *      // 26
     *      // Fizz
     *      // 28
     *      // 29
     *      // FizzBuzz
     *      // ...
     */


    const MAX = process.argv[2];

    let FizzBuzz = {

        [Symbol.iterator]()
        {

            let num = 0;
            return {

                next () {
                    let value = ++num;

                    if (value > MAX)
                    {
                        return {
                            done: true
                        };
                    }
                    else
                    {
                        let mod3 = value % 3;
                        let mod5 = value % 5;

                        if (!mod3 && !mod5)
                        {
                            value = 'FizzBuzz';
                        }
                        else if (!mod3)
                        {
                            value = 'Fizz';
                        }
                        else if (!mod5)
                        {
                            value = 'Buzz';
                        }

                        return {
                            value: value
                        };
                    }
                }

            };
        }
    }

    for (var n of FizzBuzz)
    {
        console.log(n);
    }

}());
