import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { uri } from '@lib/shared/http/utils/uri/uri';
import type { UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';
import nock from 'nock';

const { displayName } = withTest({ target: () => useApi });

describe(displayName, () => {
  const URI_PARAMS: UriParamsModel = {
    host: getEnv('REACT_APP_SERVER_API_HOST'),
    path: 'api',
    port: getEnv('REACT_APP_SERVER_API_PORT', null) || undefined,
  };
  const SUCCESS = 'success';

  test('works with get', async () => {
    const scope = nock(uri(URI_PARAMS)).get('').reply(200, SUCCESS);
    const { result } = renderHook(() => useApi(URI_PARAMS));
    await result.current.get({ path: '' });
    scope.done();
  });
});
