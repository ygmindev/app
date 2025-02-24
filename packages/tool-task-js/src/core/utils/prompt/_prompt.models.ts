import { type RequiredModel } from '@lib/shared/core/core.models';
import {
  type ArrayPromptArgsModel,
  type StringPromptArgsModel,
} from '@tool/task/core/utils/prompt/prompt.models';

export type _PromptParamsModel<TType> = Array<
  {
    [TKey in keyof RequiredModel<TType>]: RequiredModel<TType>[TKey] extends Array<string | boolean>
      ? ArrayPromptArgsModel<TKey>
      : RequiredModel<TType>[TKey] extends string | boolean
        ? StringPromptArgsModel<TKey>
        : never;
  }[keyof RequiredModel<TType>]
>;

export type _PromptModel<TType> = TType;
