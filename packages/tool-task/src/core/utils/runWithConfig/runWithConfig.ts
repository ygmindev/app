import type { CallablePromiseModel, ReturnTypeModel } from '@lib/shared/core/core.models';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import { command as _command } from '@tool/task/core/utils/command/command';
import type {
  RunWithConfigModel,
  RunWithConfigParamsModel,
} from '@tool/task/core/utils/runWithConfig/runWithConfig.models';
import isString from 'lodash/isString';

export const runWithConfig = async <TType = undefined>({
  command,
  config,
  ...params
}: RunWithConfigParamsModel<TType>): Promise<RunWithConfigModel> => {
  try {
    isString(command)
      ? await _command({ ...params, command: `${command} ${config ? `--config=${config}` : ''}` })
      : await (command as CallablePromiseModel<void, ReturnTypeModel<TType>>)(
          config as unknown as ReturnTypeModel<TType>,
        );
    return { status: TASK_STATUS.SUCCESS };
  } catch (error) {
    return { message: (error as Error).message, status: TASK_STATUS.ERROR };
  }
};
