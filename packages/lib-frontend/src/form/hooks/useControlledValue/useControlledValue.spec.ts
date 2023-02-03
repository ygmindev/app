import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import { act } from '@lib/frontend/test/utils/act/act';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => useControlledValue });

describe(displayName, () => {
  const VALUE = 'VALUE';
  const VALUE_NEW = 'VALUE_NEW';

  test('works', async () => {
    const { result, unmount } = renderHook(() =>
      useControlledValue<string>({ defaultValue: VALUE }),
    );
    expect(result.current.valueControlled).toBe(VALUE);

    act(() => result.current.setValueControlled(VALUE_NEW));
    expect(result.current.valueControlled).toBe(VALUE_NEW);

    unmount();
  });
});
