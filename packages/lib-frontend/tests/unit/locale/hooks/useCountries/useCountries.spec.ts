import { useCountries } from '@lib/frontend/locale/hooks/useCountries/useCountries';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ countries: useCountries });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => useCountries({}));
  });
});
