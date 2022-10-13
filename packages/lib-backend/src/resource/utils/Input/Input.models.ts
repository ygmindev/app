import type { WithRootParamsModel } from '@lib/backend/resource/decorators/withRoot/withRoot.models';
import type { ArgsParamsModel } from '@lib/backend/resource/utils/Args/Args.models';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export interface InputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> extends ArgsParamsModel<TMethod, TType, TForm>,
    WithRootParamsModel<TRoot> {}
