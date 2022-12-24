import type { CallableModel } from '@lib/shared/core/core.models';

export interface _WaitForExpectParamsModel {
  expect: CallableModel;
  timeout?: number;
}
