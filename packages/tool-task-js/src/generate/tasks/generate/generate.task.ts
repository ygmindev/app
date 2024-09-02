import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import generateConfig from '@lib/config/generate/generate';
import testConfig from '@lib/config/node/test/test.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { move } from '@tool/task/file/utils/move/move';
import { type GenerateParamsModel } from '@tool/task/generate/tasks/generate/generate.models';
import { boilerplate } from '@tool/task/generate/utils/boilerplate/boilerplate';

const generate: TaskParamsModel<GenerateParamsModel> = {
  name: 'generate',

  options: () => [
    {
      key: 'template',
      options: children(fromPackages('tool-task-js/templates'), { isDirectory: true }).map(
        ({ name }) => name,
      ),
      type: PROMPT_TYPE.LIST,
    },
  ],

  task: [
    async ({ options }) => {
      if (options?.template) {
        const { onSuccess, output, prepare } =
          generateConfig.params().generator?.[options.template] || {};
        const params = merge([{ onSuccess, output }, prepare ? await prepare() : {}]);
        const files = await boilerplate({ ...params, template: options.template });
        const { eteExtension, specExtension } = testConfig.params();
        const testFiles = files.filter(
          (v) => v.includes(eteExtension) || v.includes(specExtension) || v.includes('test_'),
        );
        for (const file of testFiles) {
          void move({ from: file, to: file.replace('/src/', '/tests/') });
        }
      }
    },
  ],
};

export default generate;
