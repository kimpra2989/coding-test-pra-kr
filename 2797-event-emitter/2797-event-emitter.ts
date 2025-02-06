type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {

    store: { [key in string]?: Array<{ key: number, callback: Callback }> }
    #idx: number
    constructor() {
        this.store = {}
        this.#idx = 0
    }

    subscribe(eventName: string, callback: Callback): Subscription {
        const key = this.#idx
        if (this.store[eventName]) {
            this.store[eventName].push({ key, callback })
        } else {
            this.store[eventName] = [{ key, callback }]
        }
        this.#idx++

        return {
            unsubscribe: () => {
                const idx = this.store[eventName].findIndex(e => e.key == key)
                this.store[eventName].splice(idx, 1)
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        console.log(this.store)
        return this.store[eventName]?.map(({ callback: cb }) => cb(...args)) ?? []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */