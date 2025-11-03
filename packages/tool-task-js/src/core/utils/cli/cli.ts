import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { _cli } from '@tool/task/core/utils/cli/_cli';
import { type CliModel } from '@tool/task/core/utils/cli/cli.models';
import some from 'lodash/some';

const BUILD_TASKS = ['build', 'publish'];

export const cli = async (): Promise<CliModel> => {
  const task = process.argv[2] || undefined;

  if (task && some(BUILD_TASKS, (v) => task.includes(v) || task.endsWith(v[0]))) {
    process.env.NODE_ENV = ENVIRONMENT.PRODUCTION;
  }

  return _cli({ task });
};
