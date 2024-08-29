import { _waitForExpect } from '@lib/frontend/test/utils/waitForExpect/_waitForExpect';
import {
  type WaitForExpectModel,
  type WaitForExpectParamsModel,
} from '@lib/frontend/test/utils/waitForExpect/waitForExpect.models';

export const waitForExpect = (...params: WaitForExpectParamsModel): Promise<WaitForExpectModel> =>
  _waitForExpect(...params);
