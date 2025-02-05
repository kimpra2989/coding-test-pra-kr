/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initial_value = init

    return {
      increment () {
        return ++initial_value
      },
      decrement () {
        return --initial_value
      },
      reset () {
        return initial_value = init
      },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */