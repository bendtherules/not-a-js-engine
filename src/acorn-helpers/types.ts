import { Node as AcornNode } from 'acorn';

export type Node = AcornNode;

export enum TypeStrings {
  Program = 'Program',
  ExpressionStatement = 'ExpressionStatement',
  Literal = 'Literal',
}

export interface Program extends Node {
  type: TypeStrings.Program;
  body: Node[];
}

export interface ExpressionStatement extends Node {
  type: TypeStrings.ExpressionStatement;
  expression: Expression;
}

export type Expression = Literal | Node;

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
