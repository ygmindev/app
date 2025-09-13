import { checkbox, confirm, input, search } from '@inquirer/prompts';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { Fuzzy } from '@lib/frontend/search/utils/Fuzzy/Fuzzy';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { reduceSequence } from '@lib/shared/core/utils/reduceSequence/reduceSequence';
import {
  type _PromptModel,
  type _PromptParamsModel,
} from '@tool/task/core/utils/prompt/_prompt.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { fileSelector } from 'inquirer-file-selector';
import isString from 'lodash/isString';
import startCase from 'lodash/startCase';
import toString from 'lodash/toString';

export const _prompt = async <TType extends unknown>(
  prompts: _PromptParamsModel<TType>,
): Promise<_PromptModel<TType>> =>
  reduceSequence(
    prompts,
    async (
      result,
      {
        key,
        type = PROMPT_TYPE.INPUT,
        message = `${startCase(toString(key))}?`,
        options,
        isOptional,
        defaultValue,
        basePath = fromPackages(),
      },
    ) => {
      const messageF = `${message}${isOptional ? ' (Optional)' : ''}`;
      const getChoices = async (
        query?: string,
      ): Promise<Array<{ checked?: boolean; name?: string; value: string }>> => {
        let optionsF = options ?? [];
        if (query) {
          const fuzzy = new Fuzzy({
            keys: ['id', 'label'],
            options: optionsF.map((v) => (isString(v) ? { id: v } : v)),
          });
          optionsF = await fuzzy.search(query);
        }
        return optionsF.map((option) => {
          const { name, value } = isString(option)
            ? { name: option, value: option }
            : { name: option.label, value: option.id };
          return {
            checked:
              type === PROMPT_TYPE.MULTIPLE &&
              options &&
              (defaultValue as Array<string>)?.includes(value),
            name,
            value,
          };
        });
      };

      const v = await (async () => {
        switch (type) {
          case PROMPT_TYPE.INPUT:
            return input({ message: messageF });
          case PROMPT_TYPE.CONFIRM:
            return confirm({ default: (defaultValue as boolean) ?? true, message: messageF });
          case PROMPT_TYPE.LIST:
            return search({ message: messageF, source: getChoices });
          case PROMPT_TYPE.MULTIPLE:
            return checkbox({ choices: await getChoices(), message: messageF });
          case PROMPT_TYPE.DIRECTORY:
            return fileSelector({
              allowCancel: true,
              basePath,
              message: messageF,
              type: 'file+directory',
            });
          default:
            throw new InvalidArgumentError('prompt type');
        }
      })();
      return { ...(result as object), [key]: v } as TType;
    },
    {} as TType,
  );
