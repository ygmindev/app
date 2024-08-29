import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { GENERATE_TEMPLATE_CASING_OPTIONS } from '@tool/task/generate/tasks/generateTemplate/generateTemplate.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { copy } from '@tool/task/file/utils/copy/copy';

const generateTemplate: TaskParamsModel<unknown> = {
  name: 'generateTemplate',

  task: [
    async () => {
      const { path, templateName } = await prompt([
        { key: 'templateName' },
        { basePath: fromPackages(), key: 'path', type: PROMPT_TYPE.DIRECTORY },
      ]);

      let isComplete = false;
      const overrides: Record<string, string> = {};
      while (!isComplete) {
        const { variable } = await prompt([
          {
            isOptional: true,
            key: 'variable',
            message: 'Variabe (from {{TO}}). Enter to complete.',
          },
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
        to: fromPackages('tool-task-js/templates', templateName),
      });
    },
  ],
};

export default generateTemplate;
