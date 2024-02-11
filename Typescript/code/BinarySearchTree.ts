import Queue from "./Queue";

type BinaryNode = {
  value: number;
  left?: BinaryNode;
  right?: BinaryNode;
};

export default class BinarySearchTree {
  private root?: BinaryNode;

  constructor() {
    this.root = undefined;
  }

  insert(value: number, curr?: BinaryNode): void {
    const node: BinaryNode = { value };
    if (!curr) {
      if (!this.root) {
        this.root = node;
        return;
      }
      curr = this.root;
    }
    if (value <= curr.value) {
      if (!curr.left) {
        curr.left = node;
        return;
      }
      this.insert(value, curr.left);
    } else {
      if (!curr.right) {
        curr.right = node;
        return;
      }
      this.insert(value, curr.right);
    }
  }

  delete(value: number): number | undefined {
    let parent: BinaryNode | undefined;
    let node = this.root;
    while (node !== undefined && node.value !== value) {
      parent = node;
      if (value <= node.value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    if (!node) return undefined;
    const out = node.value;
    if (node.left && node.right) {
      let replace = node.left;
      let replaceParent: BinaryNode | undefined;
      while (replace.right) {
        replaceParent = replace;
        replace = replace.right;
      }
      node.value = replace.value;
      if (replaceParent) replaceParent.right = undefined;
    } else if (node.left) {
      if (!parent) {
        this.root = node.left;
      } else {
        parent.left = node.left;
      }
      node.left = undefined;
    } else if (node.right) {
      if (!parent) {
        this.root = node.right;
      } else {
        parent.right = node.right;
      }
      node.right = undefined;
    } else {
      if (!parent) {
        this.root = undefined;
      } else if (value <= parent.value) {
        parent.left = undefined;
      } else {
        parent.right = undefined;
      }
    }
    return out;
  }

  preOrderToArray(): number[] {
    const out: number[] = [];
    this.preOrderWalk(this.root, out);
    return out;
  }

  inOrderToArray(): number[] {
    const out: number[] = [];
    this.inOrderWalk(this.root, out);
    return out;
  }

  postOrderToArray(): number[] {
    const out: number[] = [];
    this.postOrderWalk(this.root, out);
    return out;
  }

  breadthFirstToArray(): number[] {
    const q = new Queue<BinaryNode>();
    const out = [];
    if (this.root) q.enqueue(this.root);
    while (q.length) {
      const curr = q.dequeue()!;
      out.push(curr.value);
      if (curr.left) q.enqueue(curr.left);
      if (curr.right) q.enqueue(curr.right);
    }
    return out;
  }

  // I don't think this is usually used in bst but I did it just for practice
  reverse(): void {
    this.reverseNode(this.root);
  }

  private preOrderWalk(curr: BinaryNode | undefined, path: number[]): void {
    if (!curr) return;
    path.push(curr.value);
    this.preOrderWalk(curr.left, path);
    this.preOrderWalk(curr.right, path);
  }

  private inOrderWalk(curr: BinaryNode | undefined, path: number[]): void {
    if (!curr) return;
    this.inOrderWalk(curr.left, path);
    path.push(curr.value);
    this.inOrderWalk(curr.right, path);
  }

  private postOrderWalk(curr: BinaryNode | undefined, path: number[]): void {
    if (!curr) return;
    this.postOrderWalk(curr.left, path);
    this.postOrderWalk(curr.right, path);
    path.push(curr.value);
  }

  private reverseNode(node: BinaryNode | undefined): void {
    if (!node) return;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    this.reverseNode(node.left);
    this.reverseNode(node.right);
  }
}
