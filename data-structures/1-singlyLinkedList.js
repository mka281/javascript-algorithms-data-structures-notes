class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // Adds a new node to the end of the list
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
        }
        this.tail = newNode
        this.length++
        return this
    }

    // Removes the last element from the list
    pop() {
        if (this.length === 0) return undefined

        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    // Removes the head of the list and makes the second node the new head
    shift() {
        if (this.length === 0) return undefined
        const currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) this.tail = null
        return currentHead
    }

    // Adds a new node to the begining of the list
    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode    
        }

        this.lengt++
        return this
    }

    // Retrieves a node with given index
    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while (counter !== index) {
            current = current.next
            counter++
        }
        return current
    }

    // Updates the value of the node on given index
    set(index, newValue) {
        const node = this.get(index)
        if (node) {
            node.val = newValue
        } else {
            return false
        }
    }

    // Inserts a new node to the given index
    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(value)
        if (index === 0) return !!this.unshift(value)
        const newNode = new Node(value)
        const prev = this.get(index - 1)
        const temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    // Remove the node with given index
    remove(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        const prevNode = this.get(index - 1)
        const removed = prevNode.next
        prevNode.next = removed.next
        this.length--
        return removed
    }

    // Reverse
    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    //   print(){
    //       var arr = [];
    //       var current = this.head
    //       while(current){
    //           arr.push(current.val)
    //           current = current.next
    //       }
    //       console.log(arr);
    //   }
}



