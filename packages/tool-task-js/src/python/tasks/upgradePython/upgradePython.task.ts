import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import pacakgeManagerConfig from '@lib/config/python/packageManager/packageManager';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { type UpgradePythonParamsModel } from '@tool/task/python/tasks/upgradePython/upgradePython.models';

const upgradePython: TaskParamsModel<UpgradePythonParamsModel> = {
  name: 'upgrade-python',

  options: () => [
    {
      key: 'packages',
      options: children(fromPackages(), { isDirectory: true }).reduce(
        (result, { name }) => (name.endsWith('-py') ? [...result, name] : result),
        [] as Array<string>,
      ),
      type: PROMPT_TYPE.MULTIPLE,
    },
    { key: 'version' },
  ],

  task: [
    ({ options }) => {
      const version = options?.version;
      const packages = options?.packages;
      return (
        version && packages && pacakgeManagerConfig.params().pythonVersionCommand(version, packages)
      );
    },
  ],
};

export default upgradePython;
