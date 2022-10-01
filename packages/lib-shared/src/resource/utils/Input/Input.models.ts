import type { WithRootModel } from '@lib/shared/resource/decorators/withRoot/withRoot.models';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { ArgsModel } from '@lib/shared/resource/utils/Args/Args.models';

export type InputModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = WithRootModel<TRoot> & ArgsModel<TMethod, TType>;
