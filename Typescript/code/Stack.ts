type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(value: T): number {
    const node: Node<T> = { value, prev: this.head };
    this.head = node;
    return ++this.length;
  }

  pop(): T | undefined {
    if (!this.head) return undefined;
    this.length--;
    const out = this.head;
    this.head = this.head.prev;
    out.prev = undefined;
    return out.value;
  }

  peek(): T | undefined {
    if (!this.head) return undefined;
    return this.head.value;
  }
}
