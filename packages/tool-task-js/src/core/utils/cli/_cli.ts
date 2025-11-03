import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type _CliModel, type _CliParamsModel } from '@tool/task/core/utils/cli/_cli.models';
import { TaskRunner } from '@tool/task/core/utils/TaskRunner/TaskRunner';
import gulp from 'gulp';
import noop from 'lodash/noop';
import some from 'lodash/some';

const BUILD_TASKS = ['build', 'publish'];

export const _cli = async ({ task }: _CliParamsModel): Promise<_CliModel> => {
  const taskRunner = Container.get(TaskRunner);

  if (task && some(BUILD_TASKS, (v) => task.includes(v) || task.endsWith(v[0]))) {
    process.env.NODE_ENV = ENVIRONMENT.PRODUCTION;
  }

  await taskRunner.initialize();

  const taskF = gulp.task(task ?? 'default');
  if (taskF) {
    try {
      await taskF(noop);
    } catch (e) {
      console.warn(e);
    } finally {
      process.exit();
    }
  } else {
    throw new NotFoundError(task);
  }
};
