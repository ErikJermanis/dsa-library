export default class Uint8ArrayList {
  private length: number;
  private buffer: ArrayBuffer;
  private view: DataView;
  private size: number;

  constructor(size: number) {
    this.length = 0;
    this.buffer = new ArrayBuffer(size);
    this.view = new DataView(this.buffer);
    this.size = size;
  }

  print(): string {
    let out = "[";
    for (let i = 0; i < this.length; i++) {
      out += i === this.length - 1 ? `${this.view.getUint8(i)}` : `${this.view.getUint8(i)}, `;
    }
    out += "]";
    return out;
  }

  getLength(): number {
    return this.length;
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) {
      throw new Error("Out of bounds");
    }
    return this.view.getUint8(index);
  }

  unshift(value: number): number {
    if (this.length === this.size) {
      throw new Error("Insufficient memory");
    }
    this.length++;
    if (this.length !== 1) {
      for (let i = this.length - 2; i >= 0; i--) {
        this.view.setUint8(i + 1, this.view.getUint8(i));
      }
    }
    this.view.setUint8(0, value);
    return this.length;
  }

  shift(): number | undefined {
    if (this.length === 0) return undefined;
    this.length--;
    const out = this.view.getUint8(0);
    for (let i = 1; i < this.length + 1; i++) {
      this.view.setUint8(i - 1, this.view.getUint8(i));
    }
    this.view.setUint8(this.length, 0);
    return out;
  }

  push(value: number): number {
    if (this.length === this.size) {
      throw new Error("Insufficient memory");
    }
    this.view.setUint8(this.length, value);
    this.length++;
    return this.length;
  }

  pop(): number | undefined {
    if (this.length === 0) return undefined;
    this.length--;
    const out = this.view.getUint8(this.length);
    this.view.setUint8(this.length, 0);
    return out;
  }
}
