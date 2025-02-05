/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {
        return new Promise((res, rej) => {
            const timeout = setTimeout(() => {
                rej('Time Limit Exceeded')
            }, t)

            fn(...args)
                .then(result => {
                    clearTimeout(timeout)
                    return res(result)
                })
                .catch(
                    e => rej(e)
                )
        })
    }
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */