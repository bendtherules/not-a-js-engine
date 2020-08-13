import { LanguageType } from '../language-types/allTypes';

export const TypeString = '[[Type]]';
export const ValueString = '[[Value]]';
export const TargetString = '[[Target]]';

export type TType = 'normal' | 'break' | 'continue' | 'return' | 'throw';
export type TValue = LanguageType | undefined;
export type TTarget = string | undefined;

export interface TCompletionRecord {
  [TypeString]: TType;
  [ValueString]: TValue;
  [TargetString]: TTarget;
}

export class CompletionRecord implements TCompletionRecord {
  [TypeString]: TType;
  [ValueString]: TValue;
  [TargetString]: TTarget;

  constructor(type: TType, value?: TValue, target?: TTarget) {
    this[TypeString] = type;
    this[ValueString] = value;
    this[TargetString] = target;
  }
}

export function NormalCompletion(value?: TValue) {
  return new CompletionRecord('normal', value);
}

export function v(cr: CompletionRecord): LanguageType | undefined {
  if (cr[TypeString] === 'normal') {
    return cr[ValueString];
  }
  // TODO: Else, from call site, return same value
  return undefined;
}

export class AbruptCompletion extends TypeError {}
