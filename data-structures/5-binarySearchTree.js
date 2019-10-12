class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        const newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (val === current.value) return undefined
            if (val < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this    
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this    
                }
                current = current.right           
            }
        }
    }
    find(val) {
        if (this.root === null) return undefined
        let current = this.root
        while (true) {
            if (val === current.value) return current
            if (val < current.value) {
                if (current.left === null) {
                    return undefined    
                }
                current = current.left
                continue
            } else {
                if (current.right === null) {
                    return undefined    
                }
                current = current.right
                continue           
            }
        }        
    }
}

// const tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.insert(5)
// tree.insert(7)
// tree.insert(17)
// tree.insert(15)
// tree.insert(37)
// tree.find(17)
// tree.find(19)


