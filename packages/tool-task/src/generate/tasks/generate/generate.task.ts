import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import generateConfig from '@lib/config/generate/generate';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { type GenerateParamsModel } from '@tool/task/generate/tasks/generate/generate.models';
import { boilerplate } from '@tool/task/generate/utils/boilerplate/boilerplate';

const generate: TaskParamsModel<GenerateParamsModel> = {
  name: 'generate',

  options: [
    {
      key: 'template',
      options: children(fromPackages('tool-task/templates'), { isDirectory: true }).map(
        ({ name }) => name,
      ),
      type: PROMPT_TYPE.LIST,
    },
  ],

  task: [
    async ({ options }) => {
      if (options?.template) {
        const { onSuccess, output, prepare } = generateConfig.params()[options.template] || {};
        const params = merge([{ onSuccess, output }, prepare ? await prepare() : {}]);
        await boilerplate({ ...params, template: options.template });
      }
    },
  ],
};

export default generate;
