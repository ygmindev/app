import { waitFor } from '@testing-library/react';

import {
  type _WaitForExpectModel,
  type _WaitForExpectParamsModel,
} from '@lib/frontend/test/utils/waitForExpect/_waitForExpect.models';
import { WAIT_FOR_EXPECT_DURATION_DEFAULT_MILLISECONDS } from '@lib/frontend/test/utils/waitForExpect/waitForExpect.constants';

export const _waitForExpect = async (
  ...[callback, timeout = WAIT_FOR_EXPECT_DURATION_DEFAULT_MILLISECONDS]: _WaitForExpectParamsModel
): Promise<_WaitForExpectModel> => {
  await waitFor(callback, { timeout });
};
