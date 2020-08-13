import { Node } from './acorn-helpers/types';

class NotImplementedError extends TypeError {}

export function throwUnknownNode(node: Node) {
  throw new NotImplementedError(
    `Unknown type: ${node.type} with text "${node.sourceFile?.slice(
      node.start,
      node.end
    )}"`
  );
}
