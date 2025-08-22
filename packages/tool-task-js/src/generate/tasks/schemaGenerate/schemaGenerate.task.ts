import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { schemaGenerate as _schemaGenerate } from '@tool/task/generate/utils/schemaGenerate/schemaGenerate';

const schemaGenerate: TaskParamsModel<unknown> = {
  name: 'schema-generate',

  task: [async () => _schemaGenerate({ tsconfigPathname: fromWorking('tsconfig.json') })],
};

export default schemaGenerate;
