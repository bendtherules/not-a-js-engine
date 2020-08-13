import { NumberString } from './typeNames';

export interface TNumberValue {
  type: typeof NumberString;
  value: number;
  getValue(): number;
}

export class NumberValue implements TNumberValue {
  type: typeof NumberString;
  value: number;

  constructor(value: number) {
    this.type = NumberString;
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
}
