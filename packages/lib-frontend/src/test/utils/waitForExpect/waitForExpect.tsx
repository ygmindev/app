import { _waitForExpect } from '#lib-frontend/test/utils/waitForExpect/_waitForExpect';
import type {
  WaitForExpectModel,
  WaitForExpectParamsModel,
} from '#lib-frontend/test/utils/waitForExpect/waitForExpect.models';

export const waitForExpect = (...params: WaitForExpectParamsModel): WaitForExpectModel =>
  _waitForExpect(...params);
