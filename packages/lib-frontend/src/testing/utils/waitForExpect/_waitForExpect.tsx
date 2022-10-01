import { WAIT_FOR_EXPECT_DURATION_DEFAULT_MILLISECONDS } from '@lib/frontend/testing/utils/waitForExpect/waitForExpect.constants';
import type { CallableModel } from '@lib/shared/core/core.models';
import { waitFor } from '@testing-library/react';

export const _waitForExpect = (
  callback: CallableModel,
  timeout = WAIT_FOR_EXPECT_DURATION_DEFAULT_MILLISECONDS,
): unknown => waitFor(callback, { timeout });
