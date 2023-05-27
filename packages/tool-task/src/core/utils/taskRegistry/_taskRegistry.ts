import type { _TaskRegistryModel } from '@tool/task/core/utils/taskRegistry/_taskRegistry.models';
import { registry, series } from 'gulp';
import reduce from 'lodash/reduce';

export const _taskRegistry = (): _TaskRegistryModel =>
  reduce(
    registry().tasks(),
    (result, v, k) => ({
      ...result,
      [k]: async () => new Promise((resolve) => series(v)(resolve)),
    }),
    {},
  );
