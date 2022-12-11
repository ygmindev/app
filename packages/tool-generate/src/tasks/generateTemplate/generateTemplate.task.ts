import { copy } from '@lib/backend/file/utils/copy/copy';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { GENERATE_TEMPLATE_CASING_OPTIONS } from '@tool/generate/tasks/generateTemplate/generateTemplate.constants';
import type { GenerateTemplateParamsModel } from '@tool/generate/tasks/generateTemplate/generateTemplate.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

const generateTemplate: TaskParamsModel<GenerateTemplateParamsModel> = {
  name: 'generateTemplate',

  task: async () => {
    const { path, templateName } = await prompt([
      { key: 'templateName' },
      { basePath: fromPackages(), key: 'path', type: PROMPT_TYPE.DIRECTORY },
    ]);

    let isComplete = false;
    const overrides: Record<string, string> = {};
    while (!isComplete) {
      const { variable } = await prompt([
        { isOptional: true, key: 'variable', message: 'Variabe ({{FROM}} to). Enter to complete.' },
      ]);
      if (variable) {
        const [from, to] = variable.split(' ');
        if (to) {
          const { casing } = await prompt([
            { key: 'casing', options: GENERATE_TEMPLATE_CASING_OPTIONS, type: PROMPT_TYPE.LIST },
          ]);
          overrides[from] = `{{${to.replaceAll('{{', '').replaceAll('}}', '').toUpperCase()}}}${
            casing === 'noCase' ? '' : `(${casing})`
          }`;
        } else {
          continue;
        }
      } else {
        isComplete = true;
      }
    }

    await copy({
      from: fromPackages(path),
      overrides,
      to: fromPackages('tool-generate/templates', templateName),
    });

    return { status: TASK_STATUS.SUCCESS };
  },
};

export default generateTemplate;
