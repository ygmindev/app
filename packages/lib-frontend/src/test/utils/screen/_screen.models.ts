import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _ScreenModel {
  click(testID: string): Promise<void>;

  close: CallablePromiseModel;

  open(route: string): Promise<void>;

  type(testID: string, value: string): Promise<void>;
}