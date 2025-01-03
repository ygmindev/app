import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import {
  type _PromptModel,
  type _PromptParamsModel,
} from '@tool/task/core/utils/prompt/_prompt.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { prompt, type prompts, registerPrompt } from 'inquirer';
import directory from 'inquirer-directory';
import { isString } from 'lodash';
import startCase from 'lodash/startCase';
import toString from 'lodash/toString';

registerPrompt(PROMPT_TYPE.DIRECTORY, directory as prompts.PromptConstructor);

export const _prompt = async <TType extends unknown>(
  prompts: _PromptParamsModel<TType>,
): Promise<_PromptModel<TType>> =>
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
          ? options.map((option) => {
              const { label, value } = isString(option)
                ? { label: option, value: option }
                : (option as { label?: string; value: string });
              return {
                checked:
                  type === PROMPT_TYPE.MULTIPLE &&
                  options &&
                  defaultValue &&
                  defaultValue.includes(option),
                name: label,
                value,
              };
            })
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
