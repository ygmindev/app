import { appUri } from '@lib/shared/http/utils/appUri/appUri';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import toNumber from 'lodash/toNumber';

const { displayName } = withTest({ target: () => appUri });

describe(displayName, () => {
  test('works', async () => {
    const result = appUri({ name: 'WEB_ADMIN' });
    expect(result).toStrictEqual(
      uri({
        host: process.env.APP_WEB_ADMIN_HOST,
        port: toNumber(process.env.APP_WEB_ADMIN_PORT),
      }),
    );
  });
});
