import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useAppGraphql });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useAppGraphql({}));
  });
});
