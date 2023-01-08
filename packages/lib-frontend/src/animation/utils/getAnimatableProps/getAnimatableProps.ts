import { _getAnimatableProps } from '@lib/frontend/animation/utils/getAnimatableProps/_getAnimatableProps';
import type {
  GetAnimatablePropsModel,
  GetAnimatablePropsParamsModel,
} from '@lib/frontend/animation/utils/getAnimatableProps/getAnimatableProps.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';

export const getAnimatableProps = <TStyle extends StyleModel = ViewStyleModel>(
  ...[params, theme]: GetAnimatablePropsParamsModel<TStyle>
): GetAnimatablePropsModel => _getAnimatableProps<TStyle>(params, theme);
