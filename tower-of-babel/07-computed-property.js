(function () {
    'use strict';

    const arg1 = +process.argv[2];
    const arg2 = +process.argv[3];
    console.log({
        [arg1 % 2 === 0 ? "even" : "odd"]: arg1,
        [arg2 + arg1]: arg2 + arg1
    });

}());
