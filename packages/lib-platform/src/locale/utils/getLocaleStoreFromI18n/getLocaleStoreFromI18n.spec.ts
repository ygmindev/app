import { getLocaleStoreFromI18n } from 'packages/lib-platform/src/locale/utils/getLocaleStoreFromI18n/getLocaleStoreFromI18n';

import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getLocaleStoreFromI18n });

describe(displayName, () => {
  test('works', async () => {
    const result = await getLocaleStoreFromI18n({});
    expect(result).toStrictEqual({});
  });
});
