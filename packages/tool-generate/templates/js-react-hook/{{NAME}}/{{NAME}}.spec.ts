import { {{NAME}} } from '{{PATH}}/{{NAME}}/{{NAME}}';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => {{NAME}} });

describe(displayName, () => {
  test('works', async () => {
    const { result } = renderHook(() => {{NAME}}({}));
  });
});
