'use strict'

class SingleLinkedListNode {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class SingleLinkedList {
  constructor () {
    this.head = null
    this.lastItem = null
    this.size = 0
  }

  addFirst(data) {
    if (!data) throw new Error('The data cannot be null')

    const newNode = new SingleLinkedListNode(data)

    if (!this.head) {
      this.head = newNode
      this.size++
      return this.head
    }

    const old = { ...this.head }
    this.head = newNode
    this.head.next = old
    return this.head
  }

  add (data) {
    if (!data) throw new Error('The data cannot be null')

    const newNode = new SingleLinkedListNode(data)

    if (!this.head) {
      this.head = newNode
      this.size++
      return this.head
    }

    let tail = this.head
    while (tail.next !== null) {
      tail = tail.next
    }

    tail.next = newNode
    this.lastItem = newNode
    this.size++
    return this.head
  }

  get (index) {
    if (isNaN(index)) throw new Error('The index must be a number')
    if (index < 0) throw new Error('The index must be greater than or equal to 0')
    if (index >= this.size) throw new Error('The searched item does not exist')

    let count = 0
    let listExplorer = this.head

    while (count++ < index) {
      listExplorer = listExplorer.next
    }

    return listExplorer
  }

  remove(index) {
    if (isNaN(index)) throw new Error('The index must be a number')
    if (index < 0) throw new Error('The index must be greater than or equal to 0')
    if (index >= this.size) throw new Error('The searched item does not exist')

    if (index === 0 && this.head !== null) {
      let node = this.head.next
      this.head = node
      this.size--
      return
    }

    let count = 0
    let previous = null
    let searchNode =  this.head

    while (count++ < index) {
      previous = searchNode       
      searchNode = searchNode.next
    }

    if (searchNode !== null) {
      previous.next = searchNode.next
      this.size--
    }
    
    let headRef = this.head

    do {
      this.lastItem = headRef.next
      headRef = headRef.next 
    } while (headRef.next !== null);
  }
}

const node1 = new SingleLinkedListNode('node1')
const node2 = new SingleLinkedListNode('node2')
const node3 = new SingleLinkedListNode('node3')

const linkedList = new SingleLinkedList()
linkedList.add(node1)
linkedList.add(node2)
linkedList.add(node3)
console.log(linkedList)
linkedList.remove(0)
console.log(linkedList.head)


console.log(linkedList.size)
