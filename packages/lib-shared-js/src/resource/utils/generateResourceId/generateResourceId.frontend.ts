import { type GenerateResourceIdModel } from '@lib/shared/resource/utils/generateResourceId/generateResourceId.models';

export const generateResourceId = (): GenerateResourceIdModel => {
  const seconds = Math.floor(Date.now() / 1000);
  const timestamp = seconds.toString(16).padStart(8, '0');
  const array = new Uint8Array(5);
  crypto.getRandomValues(array);
  const random = Array.from(array)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  const counter = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0');
  return (timestamp + random + counter).toLowerCase();
};
