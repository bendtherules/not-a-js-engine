import { Node } from './acorn-helpers/types';
import {
  isExpressionStatement,
  isNumericLiteral,
  isStringLiteral,
  isProgram,
} from './acorn-helpers/isType';

import {
  NormalCompletion,
  CompletionRecord,
} from './internal-types/CompletionRecord';

import { NumberValue } from './language-types/NumberValue';
import { StringValue } from './language-types/StringValue';

import { throwUnknownNode } from './throwUnknownNode';

export function Evaluate(node: Node): CompletionRecord {
  if (isProgram(node)) {
    const completions = node.body.map(tmp => Evaluate(tmp));
    return completions[completions.length - 1];
  } else if (isExpressionStatement(node)) {
    return Evaluate(node.expression);
  } else if (isNumericLiteral(node)) {
    return NormalCompletion(new NumberValue(node.value));
  } else if (isStringLiteral(node)) {
    return NormalCompletion(new StringValue(node.value));
  } else {
    throwUnknownNode(node);
  }

  return NormalCompletion();
}
