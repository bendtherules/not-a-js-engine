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
});
