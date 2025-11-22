import { type WithAccessParamsModel } from '@lib/backend/resource/utils/withAccess/withAccess.models';
import { type WithOutputParamsModel } from '@lib/backend/resource/utils/withOutput/withOutput.models';
import { type ResourceOutputParamsModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type WithResourceOutputParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = WithAccessParamsModel &
  ResourceOutputParamsModel<TMethod, TType, TRoot> &
  Pick<
    WithOutputParamsModel<ResourceOutputParamsModel<TMethod, TType, TRoot>, TType>,
    'filter' | 'operation' | 'topics'
  >;

export type WithResourceOutputModel = MethodDecorator;
