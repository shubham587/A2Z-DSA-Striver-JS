// A linked list is a linear data structure in which elements, known as nodes, are stored in a sequence. 
// Each node contains two parts: the data and a reference (or pointer) to the next node in the sequence. 
// This allows for efficient insertion and deletion of elements.

// Types of Linked Lists
//     Singly Linked List: Each node points to the next node, and the last node points to null.
//     Doubly Linked List: Each node has two pointers: one pointing to the next node and another pointing to the previous node.
//     Circular Linked List: Similar to a singly linked list, but the last node points back to the first node, forming a circle.

// Basic Operations on Singly Linked List

// Insert at Beginning
// Insert at End
// Insert at a Specific Position
// Delete from Beginning
// Delete from End
// Delete from a Specific Position
// Search for an Element
// Display the List

// Singly Linked List Implementation in JavaScript:

// create a Node class

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SinglyList {
    constructor() {
        this.head = null
    }

    insertStart(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        console.log("NewNode is inserted at start")
    }

    insertEnd(data) {
        const newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        current.next = newNode

        console.log("NewNode inserted at end")
    }

    insertAtPos(data, pos){
        let current = this.head
        const newNode = new Node(data)
        if(pos == 0){
            newNode.next = current
            this.head = newNode
            return
        }
        let count = 0
        while(count < pos-1){
            count++
            current = current.next
        }
        let currNext = current.next 
        current.next = newNode
        newNode.next = currNext
        console.log(current , "current");
        return
        
    }

    size(){
        let current = this.head
        let count = 0
        while(current !== null){
            count++
            current = current.next
        }
        return count
    }

    search(data){
        let current = this.head
        let size = this.size()
        let cnt = 0
        while(cnt <= size && current !== null){
            if(data == current.data){
                return cnt
            }
            cnt++
            current = current.next
        }
        return null
    }

    deleteStart(){
        let current = this.head
        if(current == null){
            return "nothing to delete"
        }
        this.head = current.next
        return 
    }

    deleteEnd(){
        let current = this.head 
        if(current == null){
            return "nothing to delete"
        }
        let prev = ""
        while(current.next !== null){
            prev = current
            current = current.next
        }
        prev.next = null
    }

    deleteAtPos(pos){
        let current = this.head
        if(pos == 0){
            this.head = current.next
            return
        }
        let count = 0
        while(current !== null ){
            if(count == pos-1){
                console.log(current, "delete");
                let currNext = current.next
                current.next = currNext.next
                return
            }
            current = current.next 
            count++
        }
    }

    display() {
        let current = this.head
        let res = []
        if (current == null) {
            console.log("Empty list")
            return
        }
        while (current !== null) {
            res.push(current.data)
            current = current.next
        }
        console.log(res.join("-->"))
    }
}

const list = new SinglyList()
list.insertStart(12);
list.insertStart(22);
list.insertStart(32);
list.insertEnd(42)
list.insertAtPos(33, 2)
list.display()

list.deleteStart()
list.deleteEnd()
list.display()
list.deleteAtPos(2)
list.display()

console.log(list.size())
console.log(list.search(12));
