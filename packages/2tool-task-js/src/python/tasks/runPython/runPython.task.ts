import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { type RunPythonParamsModel } from '@tool/task/python/tasks/runPython/runPython.models';
import { existsSync } from 'fs';

const runPython: TaskParamsModel<RunPythonParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'run-python',

  options: async () => [
    {
      key: 'package',
      options: children(fromPackages(), { isDirectory: true }).reduce(
        (result, { name }) =>
          existsSync(joinPaths([fromPackages(name), 'pyproject.toml']))
            ? [...result, name]
            : result,
        [] as Array<string>,
      ),
      type: PROMPT_TYPE.LIST,
    },
  ],

  task: [
    ({ options }) => {
      const name = options?.name;
      const pkg = options?.package;
      if (name && pkg) {
        return `cd ${fromPackages(pkg)} && poetry run python src/${name}`;
      } else {
        throw new InvalidArgumentError();
      }
    },
  ],
};

export default runPython;
