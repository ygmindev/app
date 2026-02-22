import { generateConfig } from '@lib/config/generate/generate';
import { testConfig } from '@lib/config/node/test/test.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { GENERATE } from '@tool/task/generate/tasks/generate/generate.constants';
import { type GenerateParamsModel, type GenerateModel } from '@tool/task/generate/tasks/generate/generate.models';
import { boilerplate } from '@tool/task/generate/utils/boilerplate/boilerplate';
import { moveFile } from '@lib/backend/file/utils/moveFile/moveFile';
import { children } from '@lib/backend/file/utils/children/children';

const { templateDir } = generateConfig.params();

export const generate = buildTask<GenerateParamsModel, GenerateModel>({
  prompts: [
    {
      key: 'template',
      options: children(templateDir, { isDirectory: true }).map(
        ({ name }) => ({id: name}),
      ),
    },
  ],

  name: GENERATE,

  task: async ({ template }) => {
    if (template) {
      const { generator, templateDir } = generateConfig.params();
      const { onSuccess, outPathname, prepare } = generator?.[template] || {};
      const params = merge([{ onSuccess, outPathname }, prepare ? await prepare() : {}]);
      const files = await boilerplate({ ...params, template: template, templateDir });
      const { eteExtension, specExtension } = testConfig.params();
      const testFiles = files.filter(
        (v) => v.includes(eteExtension) || v.includes(specExtension) || v.includes('_test'),
      );
      for (const file of testFiles) {
        void moveFile({ from: file, to: file.replace('/src/', '/tests/') });
      }
      return {};
    }
    return {};
  },
});
