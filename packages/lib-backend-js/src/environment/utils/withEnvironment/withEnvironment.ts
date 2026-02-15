import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { type EnvironmentParamsModel } from '@lib/backend/environment/utils/Environment/Environment.models';
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
  const currentEnv: EnvironmentParamsModel = {
    app: current.app,
    environment: current.environment ?? (process.env.NODE_ENV as ENVIRONMENT),
    overrrides: { ...current.overrrides },
  };

  current.reset();
  let environment = new Environment({
    app: params.app,
    environment: params.environment ?? (process.env.NODE_ENV as ENVIRONMENT),
    overrrides: params.overrrides,
  });
  await environment.initialize();
  const result = await fn();

  environment.reset();
  environment = new Environment(currentEnv);
  await environment.initialize();
  Container.set(Environment, environment);
  return result;
};
