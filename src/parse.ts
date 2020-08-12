import { parse } from 'acorn';

export function parseScript(content: string) {
  return parse(content);
}
