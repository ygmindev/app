import { useAppApi } from '@lib/frontend/http/hooks/useAppApi/useAppApi';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useAppApi });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useAppApi({}));
  });
});
