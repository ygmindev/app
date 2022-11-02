import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { generateConfig } from '@lib/config/generate/generate.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { GenerateParamsModel } from '@tool/generate/tasks/generate/generate.models';
import { boilerplate } from '@tool/generate/utils/boilerplate/boilerplate';
import type { BoilerplateParamsModel } from '@tool/generate/utils/boilerplate/boilerplate.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

const generate: RegisterParamsModel<GenerateParamsModel> = {
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

    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};

export default generate;
