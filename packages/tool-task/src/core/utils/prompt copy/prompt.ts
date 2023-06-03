import { _prompt } from '@tool/task/core/utils/prompt/_prompt';
import type { PromptModel, PromptParamsModel } from '@tool/task/core/utils/prompt/prompt.models';

export const prompt = async <TType extends Record<string, string>>(
  params: PromptParamsModel<TType>,
): PromptModel<TType> => _prompt(params);
