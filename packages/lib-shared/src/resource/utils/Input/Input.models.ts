import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { ArgsModel } from '@lib/shared/resource/utils/Args/Args.models';

export type InputModel<TMethod extends ResourceMethodTypeModel, TType, TForm, TRoot = undefined> =
  ArgsModel<TMethod, TType, TForm, TRoot>;
