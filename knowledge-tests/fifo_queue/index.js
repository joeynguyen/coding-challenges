// You are implementing a First In First Out (FIFO) Queue.
// Write the Queue implementation such that the output of the code snippet below is:

const myQueue = Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)

const r1 = myQueue.dequeue() === 1
const r2 = myQueue.dequeue() === 2

console.log(r1 && r2)


// answer?
function Queue() {
    const backingArray = [];
    return {
        enqueue: backingArray.push(),
        dequeue: backingArray.shift(),
    }
}
