import { type CreateOutputParamsModel } from '@lib/backend/resource/utils/createOutput/createOutput.models';
import { type WithAccessParamsModel } from '@lib/backend/resource/utils/withAccess/withAccess.models';
import { type WithResultParamsModel } from '@lib/backend/resource/utils/withResult/withResult.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export type WithOutputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = WithAccessParamsModel &
  CreateOutputParamsModel<TMethod, TType, TRoot> &
  Pick<
    WithResultParamsModel<CreateOutputParamsModel<TMethod, TType, TRoot>, TType>,
    'filter' | 'topics'
  >;

export type WithOutputModel = MethodDecorator;
