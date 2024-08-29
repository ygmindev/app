import { type CipherCCMTypes } from 'crypto';
import { createCipheriv, randomBytes, scryptSync } from 'crypto';
import toNumber from 'lodash/toNumber';

const SERVER_IV_LENGTH = toNumber(process.env.SERVER_IV_LENGTH);
const SERVER_SALT_LENGTH = toNumber(process.env.SERVER_SALT_LENGTH);
const SERVER_KEY_LENGTH = toNumber(process.env.SERVER_KEY_LENGTH);
const SERVER_ENCRYPTION_ALGORITHM = process.env.SERVER_ENCRYPTION_ALGORITHM as CipherCCMTypes;

export const SERVER_KEY = scryptSync(
  Buffer.from(process.env.SERVER_APP_SECRET),
  randomBytes(SERVER_IV_LENGTH),
  SERVER_KEY_LENGTH,
);

export const _encrypt = (value: string): string => {
  const buffer = Buffer.from(value, 'utf-8');
  const iv = randomBytes(SERVER_IV_LENGTH);
  const cipher = createCipheriv(SERVER_ENCRYPTION_ALGORITHM, SERVER_KEY, iv, {
    authTagLength: SERVER_SALT_LENGTH,
  });
  const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
  return Buffer.concat([iv, cipher.getAuthTag(), encrypted]).toString('hex');
};
