import type { PartialModel } from '@lib/shared/core/core.models';

export interface RootModel<TRoot = undefined> {
  root?: PartialModel<TRoot>;
}
