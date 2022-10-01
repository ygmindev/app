import { useField } from '@lib/frontend/core/hooks/useField/useField';
import { act } from '@lib/frontend/testing/utils/act/act';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useField });

describe(displayName, () => {
  const VALUE = 'VALUE';
  const VALUE_NEW = 'VALUE_NEW';

  test('works', async () => {
    const { result, unmount } = renderHook(() => useField({ defaultValue: VALUE }));
    expect(result.current.fieldValue).toBe(VALUE);

    act(() => result.current.setFieldValue(VALUE_NEW));
    expect(result.current.fieldValue).toBe(VALUE_NEW);

    unmount();
  });
});
