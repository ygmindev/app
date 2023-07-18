import { children } from '#lib-backend/file/utils/children/children';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { config } from '#lib-config/core/generate/generate';
import { type GenerateConfigModel } from '#lib-config/core/generate/generate.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { boilerplate } from '#tool-generate/utils/boilerplate/boilerplate';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';

const generate: TaskParamsModel = {
  name: 'generate',

  task: () => async () => {
    const templatesDir = fromPackages('tool-generate/templates');
    const { template } = await prompt([
      {
        key: 'template',
        options: children(templatesDir, { isDirectory: true }).map(({ name }) => name),
        type: PROMPT_TYPE.LIST,
      },
    ]);
    const { onSuccess, output, prepare } = (config as GenerateConfigModel)[template] || {};
    const params = merge([{ onSuccess, output }, prepare ? await prepare() : {}]);
    await boilerplate({ ...params, template });
  },
};

export default generate;
