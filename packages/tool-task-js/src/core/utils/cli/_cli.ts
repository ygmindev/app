import taskConfig from '@lib/config/task/task';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { type _CliModel, type _CliParamsModel } from '@tool/task/core/utils/cli/_cli.models';
import gulp from 'gulp';
import noop from 'lodash/noop';

taskConfig.config();

export const _cli = async ({ task }: _CliParamsModel): Promise<_CliModel> => {
  const taskF = gulp.task(task ?? 'default');
  if (taskF) {
    return taskF(noop);
  }
  throw new NotFoundError(task);
};
