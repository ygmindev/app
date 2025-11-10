import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const runPythonDev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'run-python-dev',

  task: [() => 'run rp --package service-server-py --name service_server/dev/scratchpad.py'],
};

export default runPythonDev;
