import { getAnimatableProps } from '@lib/frontend/animation/utils/getAnimatableProps/getAnimatableProps';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => getAnimatableProps });

describe(displayName, () => {
  test('works', async () => {
    const { result: theme } = renderHook(() => useTheme());
    const result = getAnimatableProps({}, theme.current);
    expect(result).toStrictEqual({});
  });
});
