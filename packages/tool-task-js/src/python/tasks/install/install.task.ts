import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type InstallParamsModel } from '@tool/task/python/tasks/install/install.models';
import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

const install: TaskParamsModel<InstallParamsModel> = {
  name: 'python-install',

  options: () => [
    {
      key: 'packages',
      options: children(fromPackages(), { isDirectory: true }).reduce(
        (result, { name }) =>
          name.startsWith('app') || name.startsWith('service') || name.startsWith('tool')
            ? [...result, name]
            : result,
        [] as Array<string>,
      ),
      type: PROMPT_TYPE.MULTIPLE,
    },
    { isOptional: true, key: 'install' },
    { isOptional: true, key: 'installDev' },
    { isOptional: true, key: 'remove' },
  ],

  task: [({ options }) => options?.key && ''],
};

export default install;
