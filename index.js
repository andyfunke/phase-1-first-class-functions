function receivesAFunction (cb) {
    // console.log(cb());
    return cb();
}

function returnsANamedFunction () {
    function Named(){
    }
    return Named;
}

function returnsAnAnonymousFunction () {
    return function () {
      };
}