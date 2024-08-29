import { uri } from '@lib/shared/http/utils/uri/uri';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ uri });

describe(displayName, () => {
  const HOST = 'https://www.test.com';
  const PORT = 8080;
  const PATH = 'path';
  const PARAMS = { key1: 'value1', key2: 'value2' };

  test('with host', async () => {
    const result = uri({ host: HOST });
    expect(result).toStrictEqual(HOST);
  });

  test('with port', async () => {
    const result = uri({ host: HOST, port: PORT });
    expect(result).toStrictEqual(`${HOST}:${PORT}`);
  });

  test('with port', async () => {
    const result = uri({ host: HOST, pathname: PATH, port: PORT });
    expect(result).toStrictEqual(`${HOST}:${PORT}/${PATH}`);
  });

  test('with params', async () => {
    const result = uri({ host: HOST, params: PARAMS, pathname: PATH, port: PORT });
    expect(result).toStrictEqual(`${HOST}:${PORT}/${PATH}?key1=value1&key2=value2`);
  });
});
