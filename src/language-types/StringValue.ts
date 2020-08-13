import { StringString } from './typeNames';

export interface TStringValue {
  type: typeof StringString;
  value: string;
  getValue(): string;
}

export class StringValue implements TStringValue {
  type: typeof StringString;
  value: string;

  constructor(value: string) {
    this.type = StringString;
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
