import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type ResultModel } from '@lib/shared/resource/utils/Result/Result.models';
import { type RootModel } from '@lib/shared/resource/utils/Root/Root.models';

export type OutputModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = RootModel<TRoot> & {
  result?: ResultModel<TMethod, TType>;
};
