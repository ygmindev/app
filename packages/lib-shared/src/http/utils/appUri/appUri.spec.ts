import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => appUri });

describe(displayName, () => {
  test('works', async () => {
    const result = appUri({ name: 'APP_WEB_ADMIN' });
    expect(result).toStrictEqual(
      uri({
        host: getEnv('REACT_APP_APP_WEB_ADMIN_HOST'),
        port: getEnv('REACT_APP_APP_WEB_ADMIN_PORT'),
      }),
    );
  });
});
