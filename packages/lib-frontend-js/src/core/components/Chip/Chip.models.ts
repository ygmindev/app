import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type ColorStylerParamsModel } from '@lib/frontend/style/utils/styler/colorStyler/colorStyler.models';

export type ChipPropsModel = ChildrenPropsModel<AsyncTextModel> &
  ColorStylerParamsModel &
  WithIconPropsModel;
