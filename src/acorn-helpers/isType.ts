import {
  Node,
  ExpressionStatement,
  TypeStrings,
  Literal,
  NumericLiteral,
  StringLiteral,
  Program,
} from './types';

export function isProgram(node: Node): node is Program {
  return node.type === TypeStrings.Program;
}

export function isExpressionStatement(node: Node): node is ExpressionStatement {
  return node.type === TypeStrings.ExpressionStatement;
}

export function isLiteral(node: Node): node is Literal {
  return node.type === TypeStrings.Literal;
}

export function isNumericLiteral(node: Node): node is NumericLiteral {
  return isLiteral(node) && typeof node.value === 'number';
}

export function isStringLiteral(node: Node): node is StringLiteral {
  return isLiteral(node) && typeof node.value === 'string';
}
