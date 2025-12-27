import { checkbox, confirm, input, search } from '@inquirer/prompts';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { Fuzzy } from '@lib/frontend/search/utils/Fuzzy/Fuzzy';
import { BOOLEAN_STRING } from '@lib/shared/core/core.constants';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { reduceSequence } from '@lib/shared/core/utils/reduceSequence/reduceSequence';
import {
  type _PromptModel,
  type _PromptParamsModel,
} from '@tool/task/core/utils/prompt/_prompt.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { fileSelector } from 'inquirer-file-selector';
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
        type,
        message = `${startCase(toString(key))}?`,
        options,
        isOptional,
        defaultValue,
        basePath = fromPackages(),
      },
    ) => {
      const typeF = type ?? (options ? PROMPT_TYPE.LIST : PROMPT_TYPE.INPUT);
      const messageF = `${message}${isOptional ? ' (Optional)' : ''}`;

      const getChoices = async (
        query?: string,
      ): Promise<Array<{ checked?: boolean; name?: string; value: string }>> => {
        let optionsF = options ?? [];
        if (query) {
          const fuzzy = new Fuzzy({
            keys: ['id', 'label'],
            options: optionsF,
          });
          optionsF = await fuzzy.search(query);
        }

        if (defaultValue) {
          const i = optionsF.findIndex((v) => defaultValue.includes(v.id as never));
          if (i > 0) {
            const [match] = optionsF.splice(i, 1);
            optionsF.unshift(match);
          }
        }

        return optionsF.map((option) => ({
          checked:
            typeF === PROMPT_TYPE.MULTIPLE && options && defaultValue?.includes(option.id as never),
          name: option.label,
          value: option.id,
        }));
      };

      const v = await (async () => {
        switch (typeF) {
          case PROMPT_TYPE.INPUT:
            return input({ message: messageF });
          case PROMPT_TYPE.CONFIRM:
            return confirm({
              default: Boolean(defaultValue?.[0] ?? BOOLEAN_STRING.FALSE),
              message: messageF,
            });
          case PROMPT_TYPE.LIST:
            return search({ message: messageF, source: getChoices });
          case PROMPT_TYPE.MULTIPLE:
            return checkbox({ choices: await getChoices(), message: messageF });
          case PROMPT_TYPE.DIRECTORY:
            return (
              await fileSelector({
                allowCancel: true,
                basePath,
                message: messageF,
              })
            )?.path;
          default:
            throw new InvalidArgumentError('prompt type');
        }
      })();
      return { ...(result as object), [key]: v } as TType;
    },
    {} as TType,
  );
