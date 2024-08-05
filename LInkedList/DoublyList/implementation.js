class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyList{
    constructor(){
        this.head = null
    }

    insertStart(data){
        let current = this.head
        const newNode = new Node(data)
        if(current == null){
            this.head = newNode
            return
        }
        current.prev = newNode
        newNode.next = current
        this.head = newNode
        return
    }

    insertEnd(data){
        let current = this.head
        const newNode = new Node(data)
        if(current == null){
            this.insertStart(data)
            return
        }
        while(current.next !== null){
            current = current.next
        }

        if(current.next == null){
            current.next = newNode
            newNode.prev = current
        }

    }

    insertAtPos(data, pos){
        let current = this.head
        let newNode = new Node(data)

        if(pos == 0){
            this.insertStart(data)
            return
        }

        let index = 0
        while(current !== null && index < pos){
            // if(pos == index){
            //     newNode.next = current
            //     newNode.prev = current.prev
            //     current.prev.next = newNode
            //     return
            // }
            current = current.next
            index++
        }
        if(current == null){
            this.insertEnd(data)
            return
        }

        newNode.next = current;
        newNode.prev = current.prev;
        if (current.prev !== null) {
          current.prev.next = newNode;
        }
        current.prev = newNode;
    }

    search(data){
        let current = this.head
        while(current !== null){
            if(data == current.data){
                return true
            }
            current = current.next
        }
        return false
    }

    deleteStart(){
        let current = this.head
        if(current == null){
            console.log("empty list")
            return
        }
        this.head = current.next
        if(this.head !== null){
            this.head.prev = null
            return
        }
    }

    deleteEnd(){
        let current = this.head
        if(current == null){
            console.log("Empty list")
            return
        }
        if(current.next == null){
            this.head = null
            return
        }

        while(current.next != null){
            current = current.next
        }
        let currPrev = current.prev
        currPrev.next = null
        return
    }

    deleteAtPos(pos){
        if(pos == 0){
            this.deleteStart()
            return
        }
        let current = this.head
        let index = 0
        while(current !== null && index < pos){
            current = current.next
            index++
        }

        if(current.next != null){
            current.prev.next = current.next
            return
        }
        current.prev.next = null
        return
    }
    
    display(){
        let res = []
        let current = this.head

        while(current !== null) {
            res.push(current.data)
            current = current.next
        }
        return res.join("<-->")
    }
}

const list = new DoublyList()
list.insertStart(10)
list.insertStart(20)
list.insertEnd(22)
list.insertEnd(32)
list.insertAtPos(25, 2)
list.search(15) ? console.log("true") : console.log("false")

console.log(list.display())
list.deleteStart()
list.deleteEnd()
list.deleteAtPos(2)
console.log(list.display())


// list.deleteFromPosition(2);