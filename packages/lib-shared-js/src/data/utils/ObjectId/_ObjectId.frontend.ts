export class _ObjectId {
  private readonly hex: string;

  private static index: number = Math.floor(Math.random() * 0xffffff);

  private static process: string | null = null;

  constructor(id?: string) {
    if (id) {
      if (!_ObjectId.isValid(id)) {
        throw new Error('Argument passed in must be a string of 24 hex characters');
      }
      this.hex = id.toLowerCase();
    } else {
      this.hex = _ObjectId.generate();
    }
  }

  private static generate(): string {
    const time = Math.floor(Date.now() / 1000)
      .toString(16)
      .padStart(8, '0');
    _ObjectId.process = _ObjectId.process ?? _ObjectId.generateProcess();
    const { process } = _ObjectId;
    _ObjectId.index = (_ObjectId.index + 1) % 0xffffff;
    const inc = _ObjectId.index.toString(16).padStart(6, '0');
    return time + process + inc;
  }

  private static generateProcess(): string {
    let bytes: Uint8Array;
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
      bytes = new Uint8Array(5);
      window.crypto.getRandomValues(bytes as ArrayBufferView<ArrayBuffer>);
    } else {
      bytes = new Uint8Array(5);
      for (let i = 0; i < 5; i++) {
        bytes[i] = Math.floor(Math.random() * 256);
      }
    }
    return Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  public static isValid(id: string): boolean {
    return /^[0-9a-fA-F]{24}$/.test(id);
  }

  public toString(): string {
    return this.hex;
  }
}
