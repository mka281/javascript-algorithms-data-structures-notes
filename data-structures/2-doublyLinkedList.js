class Node {
    constructor(val) {
        this.value = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
        this.length++
        return this
    }
    pop() {
        if (this.length === 0) return undefined
        const oldTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = oldTail.prev
            this.tail.next = null
            oldTail.prev = null
        }
        this.length--
        return oldTail
    }
    shift() {
        if (this.length === 0) return undefined
        const oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
        }
        this.head = newNode
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter, current
        if (index <= this.length / 2) {
            counter = 0
            current = this.head
            while(counter !== index) {
                current = current.next
                counter++
            }
        } else {
            counter = this.length - 1
            current = this.tail
            while(counter !== index) {
                current = current.prev
                counte--
            }          
        }
        return current
    }
    set(index, val) {
        const node = this.get(index)
        if (node != null) {
            node.value = val
            return true
        }
        return false
    }
    
}
