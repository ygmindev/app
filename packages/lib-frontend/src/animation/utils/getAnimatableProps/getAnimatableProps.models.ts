import type {
  _GetAnimatablePropsModel,
  _GetAnimatablePropsParamsModel,
} from '@lib/frontend/animation/utils/getAnimatableProps/_getAnimatableProps.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';

export type GetAnimatablePropsParamsModel<TStyle extends StyleModel = ViewStyleModel> =
  _GetAnimatablePropsParamsModel<TStyle>;

export type GetAnimatablePropsModel = _GetAnimatablePropsModel;
