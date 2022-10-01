import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import type { PromptParamsModel } from '@tool/task/core/utils/prompt/prompt.models';
import { prompt, registerPrompt } from 'inquirer';
import directory from 'inquirer-directory';
import { startCase, toString } from 'lodash';

registerPrompt('directory', directory);

export const _prompt = async <TType extends Record<string, string>>(
  prompts: Array<PromptParamsModel<TType>>,
): Promise<TType> =>
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

        message,

        name: key as string,

        type,

        validate: isOptional
          ? undefined
          : (value: string): boolean => (value ? value.length > 0 : false),
      }),
    ),
  );
