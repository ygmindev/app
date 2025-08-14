import {
  type IsCloudModel,
  type IsCloudParamsModel,
} from '@lib/shared/environment/utils/isCloud/isCloud.models';

export const isCloud = (params?: IsCloudParamsModel): IsCloudModel => {
  const runtime = params ?? process.env.NODE_RUNTIME;
  console.warn(`@@@${runtime}`);
  return runtime === 'AWS_LAMBDA' || runtime === 'CONTAINER';
};
