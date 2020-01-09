'use strict'

class NodeItem {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor () {
    this.size = 0
    this.top = null
  }

  push (value) {
    const node = new NodeItem(value)
    node.next = this.top
    this.top = node
    this.size++
  }

  pop () {
    if (this.size) {
      const node = this.top
      this.top = this.top.next
      return node.value
    }
  }
}

const stack = new Stack()

stack.push('hola')
stack.push('chao')
stack.push('perro')
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.top)
