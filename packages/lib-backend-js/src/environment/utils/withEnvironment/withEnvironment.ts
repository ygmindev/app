import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import {
  type WithEnvironmentModel,
  type WithEnvironmentParamsModel,
} from '@lib/backend/environment/utils/withEnvironment/withEnvironment.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { type ENVIRONMENT } from '@lib/shared/environment/environment.constants';

export const withEnvironment = async <TType extends unknown>(
  ...[params, fn]: WithEnvironmentParamsModel<TType>
): Promise<WithEnvironmentModel<TType>> => {
  const current = Container.get(Environment);

  const environment = new Environment({
    environment: params.environment ?? (process.env.NODE_ENV as ENVIRONMENT),
  });
  await environment.initialize();
  Container.set(Environment, environment);
  const result = await fn();

  await current.initialize();
  Container.set(Environment, current);
  return result;
};
