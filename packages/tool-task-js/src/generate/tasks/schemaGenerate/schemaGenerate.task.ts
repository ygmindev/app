import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';
import { type SchemaGenerateParamsModel } from '@tool/task/generate/tasks/schemaGenerate/schemaGenerate.models';
import { schemaGenerate as _schemaGenerate } from '@tool/task/generate/utils/schemaGenerate/schemaGenerate';

const schemaGenerate: TaskParamsModel<SchemaGenerateParamsModel> = {
  name: 'schema-generate',

  // TODO: from config?
  task: [
    async () =>
      runClean({
        patterns: ['*'],
        root: fromPackages('lib-model-py/src/lib_model'),
      }),

    async ({ options }) =>
      _schemaGenerate({
        fromDirname: fromPackages('lib-model-js/src'),
        sources: ['*/*/*.models.ts'],
        toDirname: fromPackages('lib-model-py/src/lib_model'),
      }),
  ],
};

export default schemaGenerate;
