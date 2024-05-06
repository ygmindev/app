import { useThemePresets } from '@lib/frontend/style/hooks/useThemePresets/useThemePresets';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useThemePresets });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useThemePresets({}));
  });
});
