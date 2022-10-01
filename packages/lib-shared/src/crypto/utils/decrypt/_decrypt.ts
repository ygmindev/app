import { SERVER_KEY } from '@lib/shared/crypto/utils/encrypt/_encrypt';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import type { CipherCCMTypes } from 'crypto';
import { createDecipheriv } from 'crypto';
import { toNumber } from 'lodash';

const SERVER_IV_LENGTH = toNumber(getEnv('SERVER_IV_LENGTH'));
const SERVER_SALT_LENGTH = toNumber(getEnv('SERVER_SALT_LENGTH'));
const SERVER_ENCRYPTION_ALGORITHM = getEnv<CipherCCMTypes>('SERVER_ENCRYPTION_ALGORITHM');

export const _decrypt = (value: string): string => {
  const buffer = Buffer.from(value, 'hex');
  const iv = buffer.slice(0, SERVER_IV_LENGTH);
  const authTagPosition = SERVER_IV_LENGTH + SERVER_SALT_LENGTH;
  const authTag = buffer.slice(SERVER_IV_LENGTH, authTagPosition);
  const encrypted = buffer.slice(authTagPosition);
  const decipher = createDecipheriv(SERVER_ENCRYPTION_ALGORITHM, SERVER_KEY, iv, {
    authTagLength: SERVER_SALT_LENGTH,
  });
  decipher.setAuthTag(authTag);
  return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString('utf-8');
};
