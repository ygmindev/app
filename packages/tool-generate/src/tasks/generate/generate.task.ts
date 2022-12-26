import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { generateConfig } from '@lib/config/core/generate/configs/generate.config';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { GenerateParamsModel } from '@tool/generate/tasks/generate/generate.models';
import { boilerplate } from '@tool/generate/utils/boilerplate/boilerplate';
import type { BoilerplateParamsModel } from '@tool/generate/utils/boilerplate/boilerplate.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

const generate: TaskParamsModel<GenerateParamsModel> = {
  name: 'generate',

  task: async () => {
    const templatesDir = fromPackages('tool-generate/templates');
    const { template } = await prompt([
      {
        key: 'template',
        options: children({ from: templatesDir, isDirectory: true }).map(({ name }) => name),
        type: PROMPT_TYPE.LIST,
      },
    ]);
    const { onSuccess, output, prepare } = generateConfig[template] || {};
    const params = merge<BoilerplateParamsModel>({
      values: [{ onSuccess, output, template }, prepare ? await prepare() : {}],
    });
    await boilerplate(params);

    return { status: TASK_STATUS.SUCCESS };
  },
};

export default generate;
