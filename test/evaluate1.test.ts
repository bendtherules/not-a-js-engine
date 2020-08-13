import { Evaluate } from '../src/evaluate';
import {
  CompletionRecord,
  ValueString,
} from '../src/internal-types/CompletionRecord';

import { ParseScript } from '../src/parse';

describe('evaluate literals', () => {
  it('for 123', () => {
    const node = ParseScript(`123`);
    const returnVal = Evaluate(node);

    expect(returnVal).toBeInstanceOf(CompletionRecord);
    expect(returnVal[ValueString]?.value).toBe(123);
  });

  it('for "abc"', () => {
    const node = ParseScript(`'abc'`);
    const returnVal = Evaluate(node);

    expect(returnVal).toBeInstanceOf(CompletionRecord);
    expect(returnVal[ValueString]?.value).toBe('abc');
  });

  it('for 10+20', () => {
    const node = ParseScript(`10 + 20`);
    const returnVal = Evaluate(node);

    expect(returnVal).toBeInstanceOf(CompletionRecord);
    expect(returnVal[ValueString]?.value).toBe(30);
  });

  it('for 10+20+30', () => {
    const node = ParseScript(`10 + 20 + 30`);
    const returnVal = Evaluate(node);

    expect(returnVal).toBeInstanceOf(CompletionRecord);
    expect(returnVal[ValueString]?.value).toBe(60);
  });

  it('for "ab"+"cd"', () => {
    const node = ParseScript(`"ab"+"cd"`);
    const returnVal = Evaluate(node);

    expect(returnVal).toBeInstanceOf(CompletionRecord);
    expect(returnVal[ValueString]?.value).toBe('abcd');
  });
});
