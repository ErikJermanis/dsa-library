type Node<T> = {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
  length: number;
  private head?: Node<any>;
  private tail?: Node<any>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  append(value: T): void {
    const node: Node<T> = { value };
    this.length++;
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  prepend(value: T): void {
    const node: Node<T> = { value };
    this.length++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  insertAt(index: number, value: T): void {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.length) {
      this.append(value);
      return;
    }
    this.length++;
    const node: Node<T> = { value };
    const current = this.getAt(index);
    node.prev = current.prev;
    node.next = current;
    node.prev!.next = node;
    node.next!.prev = node;
  }

  get(index: number): T {
    if (index < 0 || index > this.length - 1) {
      throw new Error("Index out of bounds");
    }
    return this.getAt(index).value;
  }

  shift(): T | undefined {
    if (!this.head) return undefined;
    this.length--;
    const out = this.head;
    if (this.head === this.tail) {
      this.head = undefined;
      this.tail = undefined;
      return out.value;
    }
    this.head = this.head.next;
    this.head!.prev = undefined;
    out.next = undefined;
    return out.value;
  }

  pop(): T | undefined {
    if (!this.tail) return undefined;
    this.length--;
    const out = this.tail;
    if (this.head === this.tail) {
      this.head = undefined;
      this.tail = undefined;
      return out.value;
    }
    this.tail = this.tail.prev;
    this.tail!.next = undefined;
    out.prev = undefined;
    return out.value;
  }

  removeAt(index: number): T {
    if (index < 0 || index > this.length - 1) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      const out = this.shift();
      return out!;
    }
    if (index === this.length - 1) {
      const out = this.pop();
      return out!;
    }
    this.length--;
    const out = this.getAt(index);
    out.prev!.next = out.next;
    out.next!.prev = out.prev;
    out.next = undefined;
    out.prev = undefined;
    return out.value;
  }

  private getAt(index: number): Node<T> {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr!.next;
    }
    return curr!;
  }
}
