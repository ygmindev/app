import { type TaskParamsModel } from '#tool-task/core/core.models';
import { type InstallParamsModel } from '#tool-task/node/tasks/install/install.models';

const install: TaskParamsModel<InstallParamsModel> = {
  name: '',

  options: [{ isOptional: true, key: 'key' }],

  task: [({ options }) => options?.key && ''],
};

export default install;
