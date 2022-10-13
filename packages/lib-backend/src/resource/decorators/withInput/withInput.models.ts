import type { InputParamsModel } from '@lib/backend/resource/utils/Input/Input.models';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export interface WithInputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> extends InputParamsModel<TMethod, TType, TForm, TRoot> {}
