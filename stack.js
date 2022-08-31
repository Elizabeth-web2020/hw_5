class StackNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(maxSize = 10) {
    this.top = null;
    this.size = 0;
    
    if (maxSize === undefined || maxSize === Infinity || maxSize === -Infinity || isNaN(maxSize)) {
      throw new Error('Max size is invalid number');
    };

    if (typeof maxSize === 'number' && maxSize >= 0) {
      this.maxSize = maxSize;
    }; 
  }
  
  isEmpty() {
    return this.top === null;
  }
  
  push(value) {
    if (this.size && this.size >= this.maxSize) {
      throw new Error('Stack overflow');
    } else {
      const node = new StackNode(value);
    
      node.next = this.top;
      this.top = node;
      this.size++;
    };
  }
  
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    };
    
    const result = this.top;
    
    this.top = this.top.next;
    this.size--;
    
    return result.data;
  }
  
  peek() {
    if (this.isEmpty()) {
      return null;
    };
    
    return this.top.data;
  }
  
   toArray() {
    const nodes = [];
    let currentNode = this.top;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
  
  static fromIterable(collection) {
    const items = [...collection];
    const stack = new Stack(items.length);

    for (const item of items) {
      stack.push(item);
    };
    
    if (!stack.top) {
      throw new Error('Entity isn\'t iterable');
    };
    
    return stack;
  }
}

// const stack = new Stack(3);
// const stack = Stack.fromIterable([20, 55, 3, 11])

// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.log(`pop`, stack.pop());
// console.log(`peek`,stack.peek());
// console.log(stack.toArray())
// console.log(stack);

// ===============================================

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  static fromIterable(collection) {
    const items = [...collection];
    const stack = new LinkedList();

    for (const item of items) {
      stack.prepend(item);
    };
    
    if (!stack.head) {
      throw new Error('Entity isn\'t iterable');
    };
    
    return stack;
  }
}

// const stack = LinkedList.fromIterable([20, 10, 11, 23]);
// const list = new LinkedList();

// list.append("a").append("b").append("c");
// console.log(list.toArray());

module.exports = { Stack };
module.exports = { LinkedList };
