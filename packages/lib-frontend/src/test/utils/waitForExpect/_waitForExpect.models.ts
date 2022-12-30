import type { CallableModel } from '@lib/shared/core/core.models';

export interface _WaitForExpectParamsModel {
  callback: CallableModel;
  timeout?: number;
}

export type _WaitForExpectModel = void;
