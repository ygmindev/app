import { prompt, type prompts, registerPrompt } from 'inquirer';
import directory from 'inquirer-directory';
import startCase from 'lodash/startCase';
import toString from 'lodash/toString';

import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import {
  type _PromptModel,
  type _PromptParamsModel,
} from '#tool-task/core/utils/prompt/_prompt.models';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import { type PromptArgsModel } from '#tool-task/core/utils/prompt/prompt.models';

registerPrompt(PROMPT_TYPE.DIRECTORY, directory as prompts.PromptConstructor);

export const _prompt = async <TParams extends Array<PromptArgsModel>>(
  prompts: _PromptParamsModel<TParams>,
): _PromptModel<TParams> =>
  prompt(
    prompts.map(
      ({
        key,
        type = PROMPT_TYPE.INPUT,
        message = `${startCase(toString(key))}?`,
        options,
        isOptional,
        defaultValue,
        basePath = fromPackages(),
      }) => ({
        basePath,

        choices: options
          ? options.map((option) => ({
              checked:
                type === PROMPT_TYPE.CHECKBOX &&
                options &&
                defaultValue &&
                defaultValue.includes(option),
              name: option,
            }))
          : [],

        message: `${message}${isOptional ? ' (Optional)' : ''}`,

        name: key,

        pageSize: options ? Math.min(options.length, 10) : undefined,

        type,

        validate: isOptional
          ? undefined
          : (value: string): boolean => (value ? value.length > 0 : false),
      }),
    ),
  );
