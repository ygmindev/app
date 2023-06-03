import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { _PromptModel, _PromptParamsModel } from '@tool/task/core/utils/prompt/_prompt.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { prompt, registerPrompt } from 'inquirer';
import directory from 'inquirer-directory';
import startCase from 'lodash/startCase';
import toString from 'lodash/toString';

registerPrompt(PROMPT_TYPE.DIRECTORY, directory);

export const _prompt = async <TType extends Record<string, string>>(
  prompts: _PromptParamsModel<TType>,
): _PromptModel<TType> =>
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
              enabled:
                type === PROMPT_TYPE.CHECKBOX &&
                options &&
                defaultValue &&
                defaultValue.includes(option),
              name: option,
            }))
          : [],

        message: `${message}${isOptional ? ' (Optional)' : ''}`,

        name: key as string,

        type,

        validate: isOptional
          ? undefined
          : (value: string): boolean => (value ? value.length > 0 : false),
      }),
    ),
  );
