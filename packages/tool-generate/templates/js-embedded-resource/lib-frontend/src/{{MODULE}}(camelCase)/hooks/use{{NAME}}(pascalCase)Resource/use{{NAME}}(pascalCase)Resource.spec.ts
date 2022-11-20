import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { use{{NAME}}(pascalCase)Resource } from '@lib/frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => use{{NAME}}(pascalCase)Resource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => use{{NAME}}(pascalCase)Resource());

    unmount();
  });
});
