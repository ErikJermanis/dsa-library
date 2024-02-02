type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  enqueue(value: T): number {
    const node: Node<T> = { value };
    this.length++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this.length;
    }
    this.tail!.next = node;
    this.tail = node;
    return this.length;
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined;
    this.length--;
    const out = this.head;
    this.head = this.head.next;
    out.next = undefined;
    return out.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
