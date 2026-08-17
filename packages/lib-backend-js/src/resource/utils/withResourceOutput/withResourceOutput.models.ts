import { type WithAccessParamsModel } from '@lib/backend/resource/utils/withAccess/withAccess.models';
import { type WithQueryOutputParamsModel } from '@lib/backend/resource/utils/withQueryOutput/withQueryOutput.models';
import { type ResourceOutputParamsModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type WithResourceOutputParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = WithAccessParamsModel &
  ResourceOutputParamsModel<TMethod, TType, TRoot> &
  Pick<
    WithQueryOutputParamsModel<ResourceOutputParamsModel<TMethod, TType, TRoot>>,
    'operation' | 'topic'
  >;

export type WithResourceOutputModel = MethodDecorator;
