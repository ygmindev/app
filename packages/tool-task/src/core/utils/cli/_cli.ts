import '#lib-config/core/task/task';

import gulp from 'gulp';

import { type _CliModel, type _CliParamsModel } from '#tool-task/core/utils/cli/_cli.models';

export const _cli = async ({ task }: _CliParamsModel): Promise<_CliModel> => {
  await gulp.task(task)();
};
