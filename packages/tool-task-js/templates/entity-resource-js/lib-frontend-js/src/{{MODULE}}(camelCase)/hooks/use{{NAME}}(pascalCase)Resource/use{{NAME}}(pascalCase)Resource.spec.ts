import { use{{NAME}}(pascalCase)Resource } from '@lib/frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ use{{NAME}}(pascalCase)Resource });

describe(displayName, () => {
  test('works', async () => {
    const { result, unmount } = renderHook(() => use{{NAME}}(pascalCase)Resource());

    unmount();
  });
});
