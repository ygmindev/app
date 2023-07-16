import toNumber from 'lodash/toNumber';
import nock from 'nock';

import { useApi } from '#lib-frontend/http/hooks/useApi/useApi';
import { renderHook } from '#lib-frontend/test/utils/renderHook/renderHook';
import { uri } from '#lib-shared/http/utils/uri/uri';
import { type UriParamsModel } from '#lib-shared/http/utils/uri/uri.models';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useApi });

describe(displayName, () => {
  const URI_PARAMS: UriParamsModel = {
    host: process.env.SERVER_HOST,
    path: 'api',
    port: process.env.SERVER_PORT ? toNumber(process.env.SERVER_PORT) : undefined,
  };
  const SUCCESS = 'success';

  test('works with get', async () => {
    const scope = nock(uri(URI_PARAMS)).get('').reply(200, SUCCESS);
    const { result, unmount } = renderHook(() => useApi(URI_PARAMS));
    await result.current.get({ path: '' });
    scope.done();

    unmount();
  });
});
