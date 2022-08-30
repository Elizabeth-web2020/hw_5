class Stack {
  items = {};
  size = 0;
  maxSize = 10;

  constructor(maxSize) {
    if (maxSize === undefined || maxSize === Infinity || maxSize === -Infinity || isNaN(maxSize)) {
      throw new Error('Max size is invalid number');
    };

    if (typeof maxSize === 'number' && maxSize >= 0) {
      this.maxSize = maxSize;
    }; 
  }

  isEmpty() {
    return !this.size;
  }

  push(item) {
    //при условии надобности проверки item

    // if (item === Infinity || item === -Infinity || isNaN(item)) {
    //   throw new Error('Item is invalid number');
    // };

    if (this.size && this.size >= this.maxSize) {
      throw new Error('Stack overflow');
    } else {
      this.items[this.size] = item;
      this.size++; 
    }
  };

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.size - 1];
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    const removedItem = this.peek();

    delete this.items[this.size - 1];
    this.size--;

    return removedItem;
  }

  toArray() {
    const arr = [];

    while (!this.isEmpty()) {
      arr.push(this.pop());
    }

    const resultArr = arr.reverse();

    for (const item of resultArr) {
      this.push(item);
    }

    return resultArr;
  }

  static fromIterable(collection) {
    const items = [...collection];
    const stack = new Stack(items.length);

    if (stack.items === undefined) {
      throw new Error('Entity isn\'t iterable');
    };

    for (const item of items) {
      stack.push(item);
    };

    return stack;
  }
}

const stack = new Stack(2);
// const stack = Stack.fromIterable([20, 12, 5, 9]);

// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log('removed item', stack.pop());
console.log(stack);
// console.log(stack.toArray());
// console.log(stack.isEmpty());

// =======================================

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString() {
    return `${this.value}`;
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

    if (stack.items === undefined) {
      throw new Error('Entity isn\'t iterable');
    };

    for (const item of items) {
      stack.push(item);
    };

    return stack;
  }
}

// const stack = LinkedList.fromIterable([20, 10, 11, 23]);
// const list = new LinkedList();

// list.append("a").append("b").append("c");
// console.log(list.toArray());

// module.exports = { Stack };
// module.exports = { LinkedList };
