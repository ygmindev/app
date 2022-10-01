import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import type { AppUriParamsModel } from '@lib/shared/http/utils/appUri/appUri.models';
import { uri } from '@lib/shared/http/utils/uri/uri';

export const appUri = ({ name }: AppUriParamsModel = { name: __NAME__ }): string =>
  uri({
    host: getEnv(`REACT_APP_${name}_HOST`),
    port: getEnv(`REACT_APP_${name}_PORT`, null) || undefined,
  });
