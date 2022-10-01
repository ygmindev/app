import type { PartialModel } from '@lib/shared/core/core.models';

export interface WithRootModel<TRoot = undefined> {
  root?: PartialModel<TRoot> | null;
}
