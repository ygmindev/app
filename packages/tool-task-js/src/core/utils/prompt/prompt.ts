import { _prompt } from '@tool/task/core/utils/prompt/_prompt';
import {
  type PromptModel,
  type PromptParamsModel,
} from '@tool/task/core/utils/prompt/prompt.models';

export const prompt = async <TType>(
  params: PromptParamsModel<TType>,
): Promise<PromptModel<TType>> => _prompt(params);
