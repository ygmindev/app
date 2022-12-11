import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import type { AppUriParamsModel } from '@lib/shared/http/utils/appUri/appUri.models';
import { uri } from '@lib/shared/http/utils/uri/uri';

const APP_NAME = getEnv('APP_NAME');

export const appUri = (
  { name = APP_NAME, params, path }: AppUriParamsModel = { name: APP_NAME },
): string =>
  uri({
    host: getEnv(`APP_${name}_HOST`),
    params,
    path,
    port: getEnv(`APP_${name}_PORT`, null) || undefined,
  });
