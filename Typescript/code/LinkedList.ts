type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class LinkedList<T> {
  length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  append(value: T): void {
    const node: Node<T> = { value, next: undefined };
    this.length++;
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = this.tail.next;
  }

  prepend(value: T): void {
    const node: Node<T> = { value, next: undefined };
    this.length++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
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
    const node = { value, next: undefined } as Node<T>;
    const curr = this.getAt(index - 1);
    node.next = curr!.next;
    curr!.next = node;
  }

  get(index: number): T | undefined {
    const curr = this.getAt(index);
    return curr ? curr.value : undefined;
  }

  set(index: number, value: T): void {
    if (index < 0 || index > this.length - 1) {
      throw new Error("Index out of bounds");
    }
    const curr = this.getAt(index);
    curr!.value = value;
  }

  indexOf(value: T): number {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
      index++;
    }
    return -1;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  print(): void {
    let curr = this.head;
    let result = "";
    while (curr) {
      result += `${curr.value} -> `;
      curr = curr.next;
    }
    console.log(result);
  }

  pop(): T | undefined {
    if (!this.head) return undefined;
    this.length--;
    if (this.head === this.tail) {
      const out = this.head.value;
      this.head = undefined;
      this.tail = undefined;
      return out;
    }
    let curr = this.getAt(this.length - 1);
    const out = curr!.next!.value;
    this.tail = curr;
    curr!.next = undefined;
    return out;
  }

  shift(): T | undefined {
    if (!this.head) return undefined;
    this.length--;
    if (this.head === this.tail) {
      const out = this.head.value;
      this.head = undefined;
      this.tail = undefined;
      return out;
    }
    const node = this.head;
    const out = node.value;
    this.head = node.next;
    node.next = undefined;
    return out;
  }

  removeAt(index: number): T {
    if (index < 0 || index > this.length - 1) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      return this.shift()!;
    }
    if (index === this.length - 1) {
      return this.pop()!;
    }
    this.length--;
    const curr = this.getAt(index - 1);
    const node = curr!.next;
    const out = node!.value;
    curr!.next = node!.next;
    node!.next = undefined;
    return out;
  }

  remove(value: T): T | undefined {
    const index = this.indexOf(value);
    if (index === -1) return undefined;
    const out = this.removeAt(index);
    return out;
  }

  toArray(): T[] {
    const out: T[] = [];
    let curr = this.head;
    while (curr) {
      out.push(curr.value);
      curr = curr.next;
    }
    return out;
  }

  reverse(): void {
    if (this.length < 2) return;
    this.tail = this.head;
    let prev = undefined;
    let curr = this.head;
    let next = curr!.next;
    while (next) {
      curr!.next = prev;
      prev = curr;
      curr = next;
      next = next?.next;
    }
    curr!.next = prev;
    this.head = curr;
  }

  private getAt(index: number): Node<T> | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }
}
