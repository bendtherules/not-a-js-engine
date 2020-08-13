import { Node } from './acorn-helpers/types';
import {
  isExpressionStatement,
  isNumericLiteral,
  isStringLiteral,
  isProgram,
  isBinaryExpression,
} from './acorn-helpers/isType';

import {
  NormalCompletion,
  CompletionRecord,
  v,
} from './internal-types/CompletionRecord';

import { NumberValue } from './language-types/NumberValue';
import { StringValue } from './language-types/StringValue';

import { throwUnknownNode } from './throwUnknownNode';

export function Evaluate(node: Node): CompletionRecord {
  if (isProgram(node)) {
    // Handle root program node
    const completions = node.body.map(tmp => Evaluate(tmp));
    return completions[completions.length - 1];
  } else if (isExpressionStatement(node)) {
    // Handle ExpressionStatement
    return Evaluate(node.expression);
  } else if (isNumericLiteral(node)) {
    // Handle NumberLiteral
    return NormalCompletion(new NumberValue(node.value));
  } else if (isStringLiteral(node)) {
    // Handle StringLiteral
    return NormalCompletion(new StringValue(node.value));
  } else if (isBinaryExpression(node)) {
    if (node.operator === '+') {
      // TODO - Forward completion record for abrupt completions
      const leftVal = v(Evaluate(node.left));
      const rightVal = v(Evaluate(node.right));
      if (leftVal instanceof NumberValue && rightVal instanceof NumberValue) {
        return NormalCompletion(
          new NumberValue(leftVal.getValue() + rightVal.getValue())
        );
      }
      if (leftVal instanceof StringValue && rightVal instanceof StringValue) {
        return NormalCompletion(
          new StringValue(leftVal.getValue() + rightVal.getValue())
        );
      }
    }
  } else {
    // If not handled, throw error
    throwUnknownNode(node);
  }

  return NormalCompletion();
}
