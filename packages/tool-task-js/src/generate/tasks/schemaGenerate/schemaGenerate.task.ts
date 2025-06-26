import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type SchemaGenerateParamsModel } from '@tool/task/generate/tasks/schemaGenerate/schemaGenerate.models';
import { schemaGenerate as _schemaGenerate } from '@tool/task/generate/utils/schemaGenerate/schemaGenerate';

const schemaGenerate: TaskParamsModel<SchemaGenerateParamsModel> = {
  name: 'schema-generate',

  // options: () => [{ isOptional: true, key: 'key' }],

  // TODO: from config?
  task: [
    async ({ options }) =>
      _schemaGenerate({
        from: [fromPackages('lib-model-js/src/admin/resources/*/*.models.ts')],
      }),
  ],
};

export default schemaGenerate;
