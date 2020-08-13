import { parse } from 'acorn';

export function ParseScript(content: string) {
  return parse(content);
}
