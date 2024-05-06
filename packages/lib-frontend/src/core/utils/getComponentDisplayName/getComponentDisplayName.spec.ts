import { type SFCModel } from '@lib/frontend/core/core.models';
import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getComponentDisplayName });

describe(displayName, () => {
  const TEST = 'TEST';
  test('works', async () => {
    const Component: SFCModel = () => null;
    Component.displayName = TEST;
    const result = getComponentDisplayName(Component);
    expect(result).toStrictEqual(TEST);
  });
});
