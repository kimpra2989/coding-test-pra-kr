function solution(scoville, K) {
    const minHeap = new MinHeap()
    
    for (const s of scoville) {
        minHeap.push(s)
    }
    
    let res = 0
    while (minHeap.length >= 2) {
        if (minHeap.peak() >= K) return res
    
        res++
        const min1 = minHeap.pop()
        const min2 = minHeap.pop()
        
        minHeap.push(min1 + 2 * min2)    
    }
    
    return minHeap.peak() >= K ? res : -1
}

class MinHeap {
    constructor () {
        this.heap = [null]
    }

    peak () {
        return this.heap[1]
    }    
    
    get length () {
        return this.heap.length - 1
    }
    
    push (val) {
        this.heap.push(val)
        this.heapifyUp (this.length)
    }
    
    heapifyUp (idx) {
        const parent = idx >> 1
        
        if (this.heap[idx] < this.heap[parent]) {
            this.swap(idx, parent)
            this.heapifyUp(parent)
        }
    }
    
    swap (idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
    }
    
    pop () {
        if (this.length == 1) {
            return this.heap.pop()
        } 
        
        const root = this.heap[1]
        this.heap[1] = this.heap.pop()
        this.heapifyDown(1)
        
        return root
    }
    
    heapifyDown (idx) {
        let minIdx = idx
        const left = idx << 1
        const right = (idx << 1) + 1
        
        if (left <= this.length && this.heap[minIdx] > this.heap[left]) {
            minIdx = left
        }
        if (right <= this.length && this.heap[minIdx] > this.heap[right]) {
            minIdx = right
        }
        
        if (idx != minIdx) {
            this.swap(idx, minIdx)            
            this.heapifyDown(minIdx)
        }
    }
}