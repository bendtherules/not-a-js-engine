import { Node as AcornNode } from 'acorn';

export type Node = AcornNode;

export enum TypeStrings {
  Program = 'Program',
  ExpressionStatement = 'ExpressionStatement',
  Literal = 'Literal',
  BinaryExpression = 'BinaryExpression',
}

export interface Program extends Node {
  type: TypeStrings.Program;
  body: Node[];
}

export interface ExpressionStatement extends Node {
  type: TypeStrings.ExpressionStatement;
  expression: Expression;
}

// TODO: Add more possible type of expressions here and remove generic node
export type Expression = Literal | BinaryExpression | Node;

export interface Literal extends Node {
  type: TypeStrings.Literal;
  value: string | boolean | null | number | RegExp;
}

export interface NumericLiteral extends Node {
  type: TypeStrings.Literal;
  value: number;
}

export interface StringLiteral extends Node {
  type: TypeStrings.Literal;
  value: string;
}

export interface BinaryExpression extends Node {
  type: TypeStrings.BinaryExpression;
  left: Literal;
  right: Literal;
  // TODO: Add actual possible operators here
  operator: string;
}
