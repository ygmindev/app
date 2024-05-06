import { {{NAME}} } from '@{{PATH}}(pathCase)/{{NAME}}(camelCase)/{{NAME}}(camelCase)';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ {{NAME}}(camelCase) });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => {{NAME}}(camelCase)({}));
  });
});
