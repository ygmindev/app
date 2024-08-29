import {
  type StreamToStringModel,
  type StreamToStringParamsModel,
} from '@lib/backend/core/utils/streamToString/streamToString.models';

export const streamToString = async (
  params: StreamToStringParamsModel,
): Promise<StreamToStringModel> => {
  const chunks: Array<Buffer> = [];
  return new Promise((resolve, reject) => {
    params.on('data', (chunk) => chunks.push(Buffer.from(chunk as Uint8Array)));
    params.on('error', (err) => reject(err));
    params.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
};
