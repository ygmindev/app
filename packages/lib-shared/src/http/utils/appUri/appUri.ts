import toNumber from 'lodash/toNumber';

import type { AppUriParamsModel } from '#lib-shared/http/utils/appUri/appUri.models';
import { uri } from '#lib-shared/http/utils/uri/uri';

export const appUri = (
  { name = process.env.ENV_NAME, params, path }: AppUriParamsModel = { name: process.env.ENV_NAME },
): string =>
  uri({
    host: process.env[`APP_${name}_HOST`] || '',
    params,
    path,
    port: toNumber(process.env[`APP_${name}_PORT`]),
  });
