import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { act } from '@lib/frontend/test/utils/act/act';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useValueControlled });

describe(displayName, () => {
  const VALUE = 'VALUE';
  const VALUE_NEW = 'VALUE_NEW';

  test('works', async () => {
    const { result, unmount } = renderHook(() =>
      useValueControlled<string>({ defaultValue: VALUE }),
    );
    expect(result.current.valueControlled).toBe(VALUE);

    await act(() => result.current.valueControlledSet(VALUE_NEW));
    expect(result.current.valueControlled).toBe(VALUE_NEW);

    unmount();
  });
});
