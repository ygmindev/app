import type {
  _WaitForExpectModel,
  _WaitForExpectParamsModel,
} from '@lib/frontend/test/utils/waitForExpect/_waitForExpect.models';
import { WAIT_FOR_EXPECT_DURATION_DEFAULT_MILLISECONDS } from '@lib/frontend/test/utils/waitForExpect/waitForExpect.constants';
import { waitFor } from '@testing-library/react';

export const _waitForExpect = async (
  ...[callback, timeout = WAIT_FOR_EXPECT_DURATION_DEFAULT_MILLISECONDS]: _WaitForExpectParamsModel
): _WaitForExpectModel => {
  await waitFor(callback, { timeout });
};
