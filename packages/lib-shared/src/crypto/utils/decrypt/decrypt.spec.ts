import { decrypt } from '@lib/shared/crypto/utils/decrypt/decrypt';
import { encrypt } from '@lib/shared/crypto/utils/encrypt/encrypt';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ encrypt });

describe(displayName, () => {
  test('works', async () => {
    const TEST_STRING = 'TEST_STRING';
    const decrypted = decrypt(encrypt(TEST_STRING));
    expect(decrypted).toEqual(TEST_STRING);
  });
});
