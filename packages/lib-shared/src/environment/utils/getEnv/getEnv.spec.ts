import { EnvironmentVariableError } from '@lib/shared/environment/errors/EnvironmentVariableError/EnvironmentVariableError';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';
import { cloneDeep } from 'lodash';

const { displayName } = withTest({ target: () => getEnv });

describe(displayName, () => {
  const PROCESS_ENV_CACHE = cloneDeep(process.env);

  beforeEach(async () => {
    process.env = PROCESS_ENV_CACHE;
    jest.resetModules();
  });

  test('works', async () => {
    const key = 'TEST';
    const value = 'test';
    process.env[key] = value;
    const result = getEnv(key);
    expect(result).toStrictEqual(value);
  });

  test('throws', async () => {
    const key = '__MISSING_KEY__';
    expect(() => getEnv(key)).toThrowError(EnvironmentVariableError);
  });

  test('works with default value', async () => {
    const key = '__MISSING_KEY__';
    const value = 'value';
    const result = getEnv(key, value);
    expect(result).toStrictEqual(value);
  });
});
