import { useFieldValue } from '@lib/frontend/form/hooks/useField/useField';
import { act } from '@lib/frontend/test/utils/act/act';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useFieldValue });

describe(displayName, () => {
  const VALUE = 'VALUE';
  const VALUE_NEW = 'VALUE_NEW';

  test('works', async () => {
    const { result, unmount } = renderHook(() => useFieldValue<string>({ defaultValue: VALUE }));
    expect(result.current.fieldValue).toBe(VALUE);

    act(() => result.current.setFieldValue(VALUE_NEW));
    expect(result.current.fieldValue).toBe(VALUE_NEW);

    unmount();
  });
});
