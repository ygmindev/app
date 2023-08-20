import { Filter } from '#lib-backend/resource/utils/Filter/Filter';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Filter });

describe(displayName, () => {
  test('works', async () => {
    const result = new Filter();
    expect(result).toHaveProperty('field');
    expect(result).toHaveProperty('condition');
    expect(result).toHaveProperty('value');
  });
});
