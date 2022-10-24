import type { PromiseModel } from '@lib/shared/core/core.models';

export interface _ScreenModel {
  close: PromiseModel;
  open(route: string): Promise<void>;
}
