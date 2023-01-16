import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { copy } from '@tool/task/file/utils/copy/copy';

vi.mock('fs');

const { displayName } = withTest({ target: () => copy });

describe(displayName, () => {
  test('works', async () => {
    // TODO: implement
    const result = await copy({ from: '', to: '' });
    expect(result).toStrictEqual({});
  });
});
