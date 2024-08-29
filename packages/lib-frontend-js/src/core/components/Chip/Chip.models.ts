import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type AsyncTextModel, type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type ColorStylerParamsModel } from '@lib/frontend/style/utils/styler/colorStyler/colorStyler.models';

export type ChipPropsModel = ChildrenPropsModel<AsyncTextModel> &
  ColorStylerParamsModel &
  WithIconPropsModel;
