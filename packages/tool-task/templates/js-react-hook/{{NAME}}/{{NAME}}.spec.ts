import { {{NAME}} } from '@{{PATH}}(pathCase)/{{NAME}}/{{NAME}}';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ {{NAME}} });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => {{NAME}}({}));
  });
});
