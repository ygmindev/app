import type { WithRootModel } from '@lib/shared/resource/decorators/withRoot/withRoot.models';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { ResultModel } from '@lib/shared/resource/utils/Result/Result.models';

export interface OutputModel<TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined>
  extends WithRootModel<TRoot> {
  result?: ResultModel<TMethod, TType>;
}
