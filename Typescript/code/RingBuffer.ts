export default class Uint8RingBuffer {
  private length: number;
  private buffer: ArrayBuffer;
  private view: DataView;
  private size: number;
  private write: number;
  private read: number;

  constructor(size: number) {
    this.length = 0;
    this.size = size;
    this.buffer = new ArrayBuffer(size);
    this.view = new DataView(this.buffer);
    this.write = 0;
    this.read = 0;
  }

  print(): string {
    let out = "[";
    if (this.length > 0) {
      for (let i = 0; i < this.length; i++) {
        out +=
          i === this.length - 1
            ? this.view.getUint8((this.read + i) % this.size)
            : `${this.view.getUint8((this.read + i) % this.size)}, `;
      }
    }
    out += "]";
    return out;
  }

  enqueue(value: number): number {
    this.view.setUint8(this.write, value);
    this.write = (this.write + 1) % this.size;
    if (this.length === this.size) {
      this.read = (this.read + 1) % this.size;
    } else {
      this.length++;
    }
    return this.length;
  }

  dequeue(): number | undefined {
    if (this.length === 0) return undefined;
    this.length--;
    const out = this.view.getUint8(this.read);
    this.view.setUint8(this.read, 0);
    this.read = (this.read + 1) % this.size;
    return out;
  }
}
