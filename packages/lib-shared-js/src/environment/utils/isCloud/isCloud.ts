import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { Container } from '@lib/shared/core/utils/Container/Container';
import {
  type IsCloudModel,
  type IsCloudParamsModel,
} from '@lib/shared/environment/utils/isCloud/isCloud.models';

export const isCloud = (params?: IsCloudParamsModel): IsCloudModel => {
  const environment = Container.get(Environment);
  const runtime = params ?? environment.variables.NODE_RUNTIME;
  return runtime === 'AWS_LAMBDA' || runtime === 'CONTAINER';
};
