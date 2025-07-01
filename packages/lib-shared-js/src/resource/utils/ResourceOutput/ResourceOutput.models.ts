import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResultModel } from '@lib/shared/resource/utils/Result/Result.models';
import { type RootModel } from '@lib/shared/resource/utils/Root/Root.models';

export type ResourceOutputModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = RootModel<TRoot> & {
  result?: ResultModel<TMethod, TType>;
};
