import type { _RegistryModel } from '@tool/task/core/utils/registry/_registry.models';
import { registry, series } from 'gulp';
import reduce from 'lodash/reduce';

export const _registry = (): _RegistryModel =>
  reduce(
    registry().tasks(),
    (result, v, k) => ({
      ...result,
      [k]: async () => new Promise((resolve) => series(v)(resolve)),
    }),
    {},
  );
