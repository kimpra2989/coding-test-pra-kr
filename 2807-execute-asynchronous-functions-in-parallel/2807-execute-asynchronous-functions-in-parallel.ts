type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    const fns_len = functions.length

    function observer() {
        const fulfilled = new Array(fns_len).fill(false)

        return idx => {
            fulfilled[idx] = true
            return fulfilled.every(x => x)
        }
    }

    const isAllFulfilled = observer()

    const result = new Array(fns_len)
    return new Promise((resolve, reject) => {
        functions.forEach((fn, idx) => {
            fn()
                .then(res => {
                    result[idx] = res
                    if (isAllFulfilled(idx)) resolve(result as T[])
                })
                .catch(reject)
        })
    })
}


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */