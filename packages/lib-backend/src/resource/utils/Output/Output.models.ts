import type { WithRootParamsModel } from '@lib/backend/resource/decorators/withRoot/withRoot.models';
import type { ResultParamsModel } from '@lib/backend/resource/utils/Result/Result.models';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export interface OutputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> extends ResultParamsModel<TMethod, TType>,
    WithRootParamsModel<TRoot> {}
