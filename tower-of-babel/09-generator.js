/*global process:true*/

(function () {
    'use strict';

    /**
     * In the last exercise you used Iterables to generate loops.
     * But the Iterable object did require a lot of overhead.
     * With the new generator syntax it's possible to do the same thing with less effort.
     *
     * Here is an example of the generator syntax:
     *
     * let fibonacci = function*(){
     *      let pre = 0, cur = 1;
     *      while (pre < 1000) {
     *          // Here we destruct the former state
     *          [pre, cur] = [cur, pre + cur];
     *          // and yield (return) each step
     *          yield pre;
     *      }
     * }();
     *
     * for (var n of fibonacci) {
     *      console.log(n);
     * }
     *
     * The difference to other ways is the function* notation and that you use yield where
     * you would have used return before.
     *
     * # Exercise
     * Create the same FizzBuzz algorithm as explained in the last exercise but this time
     * using the new generator syntax.
     */

    const MAX = process.argv[2];

    let FizzBuzz = {

        [Symbol.iterator]: function * () {
            let num = 0;

            while (num < MAX) {

                let value = ++num;
                let mod3 = value % 3;
                let mod5 = value % 5;

                if (!mod3 && !mod5) {
                    value = 'FizzBuzz';
                }
                else if (!mod3) {
                    value = 'Fizz';
                }
                else if (!mod5) {
                    value = 'Buzz';
                }

                yield value;

            }
        }

    };


    for (var n of FizzBuzz)
    {
        console.log(n);
    }

}());
