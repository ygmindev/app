import { copy } from '@lib/backend/file/utils/copy/copy';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

jest.mock('fs');

const { displayName } = withTest({ target: () => copy });

describe(displayName, () => {
  test('works', async () => {
    // TODO: implement
    const result = await copy({ from: '', to: '' });
    expect(result).toStrictEqual({});
  });
});
