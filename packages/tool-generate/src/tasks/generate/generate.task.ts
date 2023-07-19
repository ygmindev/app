import { children } from '#lib-backend/file/utils/children/children';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { config } from '#lib-config/core/generate/generate';
import { type GenerateConfigModel } from '#lib-config/core/generate/generate.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { type GenerateParamsModel } from '#tool-generate/tasks/generate/generate.models';
import { boilerplate } from '#tool-generate/utils/boilerplate/boilerplate';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';

const generate: TaskParamsModel<GenerateParamsModel> = {
  name: 'generate',

  options: [
    {
      key: 'template',
      options: children(fromPackages('tool-generate/templates'), { isDirectory: true }).map(
        ({ name }) => name,
      ),
      type: PROMPT_TYPE.LIST,
    },
  ],

  task: [
    async ({ options }) => {
      if (options?.template) {
        const { onSuccess, output, prepare } =
          (config as GenerateConfigModel)[options.template] || {};
        const params = merge([{ onSuccess, output }, prepare ? await prepare() : {}]);
        await boilerplate({ ...params, template: options.template });
      }
    },
  ],
};

export default generate;
