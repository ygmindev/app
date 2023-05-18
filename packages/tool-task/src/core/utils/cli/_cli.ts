import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import taskConfig from '@lib/config/core/task/task';
import type { _CliModel, _CliParamsModel } from '@tool/task/core/utils/cli/_cli.models';

export const _cli = async ({ task }: _CliParamsModel): _CliModel =>
  await taskConfig.task({ options: { task }, root: fromRoot() });
