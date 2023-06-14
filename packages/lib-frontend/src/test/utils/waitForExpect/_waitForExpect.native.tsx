import { waitFor } from '@testing-library/react-native';

import type {
  _WaitForExpectModel,
  _WaitForExpectParamsModel,
} from '#lib-frontend/test/utils/waitForExpect/_waitForExpect.models';
import { WAIT_FOR_EXPECT_DURATION_DEFAULT_MILLISECONDS } from '#lib-frontend/test/utils/waitForExpect/waitForExpect.constants';

export const _waitForExpect = ({
  callback,
  timeout = WAIT_FOR_EXPECT_DURATION_DEFAULT_MILLISECONDS,
}: _WaitForExpectParamsModel): _WaitForExpectModel => {
  waitFor(callback, { timeout });
};
