import { WAIT_FOR_EXPECT_DURATION_DEFAULT_MILLISECONDS } from '@lib/frontend/test/utils/waitForExpect/waitForExpect.constants';
import type { CallableModel } from '@lib/shared/core/core.models';
import { waitFor } from '@testing-library/react-native';

export const _waitForExpect = (
  callback: CallableModel,
  timeout = WAIT_FOR_EXPECT_DURATION_DEFAULT_MILLISECONDS,
): void => {
  waitFor(callback, { timeout });
};
