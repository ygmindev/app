import {
  type GetEnvironmentVariablesModel,
  type GetEnvironmentVariablesParamsModel,
} from '@lib/shared/core/utils/getEnvironmentVariables/getEnvironmentVariables.models';
import reduce from 'lodash/reduce';
import some from 'lodash/some';

export const getEnvironmentVariables = ({
  envPrefix,
  isPrefix,
}: GetEnvironmentVariablesParamsModel): GetEnvironmentVariablesModel =>
  reduce(
    process.env,
    (result, v, k) =>
      some([envPrefix].flat(), (prefix) => prefix && k.startsWith(prefix))
        ? { ...result, [isPrefix ? `process.env.${k}` : k]: JSON.stringify(v) }
        : result,
    {},
  );
