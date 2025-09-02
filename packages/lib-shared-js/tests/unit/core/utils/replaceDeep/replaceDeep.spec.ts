import { replaceDeep } from '@lib/shared/core/utils/replaceDeep/replaceDeep';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ replaceDeep });

describe(displayName, () => {
  const FROM = 'from';
  const TO = 'to';
  const STRING = 'string to replace from';
  const EXPECTED = STRING.replaceAll(FROM, TO);

  test('string', async () => {
    const result = replaceDeep(STRING, FROM, TO);
    expect(result).toStrictEqual(EXPECTED);
  });

  test('object', async () => {
    const value = { a: 1, b: STRING, c: { d: STRING } };
    const result = replaceDeep(value, FROM, TO);
    expect(result).toStrictEqual({ a: 1, b: EXPECTED, c: { d: EXPECTED } });
  });

  test('array', async () => {
    const value = [STRING, { a: 1, b: STRING, c: { d: STRING } }];
    const result = replaceDeep(value, FROM, TO);
    expect(result).toStrictEqual([EXPECTED, { a: 1, b: EXPECTED, c: { d: EXPECTED } }]);
  });
});
