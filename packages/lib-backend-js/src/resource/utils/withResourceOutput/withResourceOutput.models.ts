import { type CreateResourceOutputParamsModel } from '@lib/backend/resource/utils/createResourceOutput/createResourceOutput.models';
import { type WithAccessParamsModel } from '@lib/backend/resource/utils/withAccess/withAccess.models';
import { type WithOutputParamsModel } from '@lib/backend/resource/utils/withOutput/withOutput.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export type WithResourceOutputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = WithAccessParamsModel &
  CreateResourceOutputParamsModel<TMethod, TType, TRoot> &
  Pick<
    WithOutputParamsModel<CreateResourceOutputParamsModel<TMethod, TType, TRoot>, TType>,
    'filter' | 'operation' | 'topics'
  >;

export type WithResourceOutputModel = MethodDecorator;
