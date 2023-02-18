import { createHandler } from '@lib/backend/lambda/utils/createHandler/createHandler';

export const main = createHandler(async () => ({
  body: JSON.stringify('success'),
  headers: { 'Access-Control-Allow-Origin': '*' },
  statusCode: 200,
}));
