type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class CircularLinkedList<T> {
  length: number;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.tail = undefined;
  }

  insert(value: T): void {
    const node: Node<T> = { value };
    this.length++;
    if (!this.tail) {
      this.tail = node;
      this.tail.next = node;
      return;
    }
    let curr = this.tail;
    if (value >= curr.value) {
      node.next = curr.next;
      curr.next = node;
      this.tail = node;
      return;
    }
    while (curr.next!.value <= value) {
      curr = curr.next!;
    }
    node.next = curr.next;
    curr.next = node;
  }

  delete(value: T): void {
    if (!this.tail) return;
    this.length--;
    let curr = this.tail;
    while (curr.next!.value !== value && curr.next !== this.tail) {
      curr = curr.next!;
    }
    if (curr.next!.value === value) {
      if (curr.next === this.tail) this.tail = curr;
      const out = curr.next!;
      curr.next = out.next;
      out.next = undefined;
    }
  }

  print(): string {
    let out = "";
    if (!this.tail) return out;
    let curr = this.tail;
    do {
      out += `${curr.next!.value} `;
      curr = curr.next!;
    } while (curr !== this.tail);
    return out;
  }
}
