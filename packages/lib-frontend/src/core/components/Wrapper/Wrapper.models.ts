import type { ViewPropsModel } from '@lib/frontend/core/components/View/View.models';
import type { SpacingModel } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler.models';
import type { ViewStylerParamsModel } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler.models';

export interface WrapperPropsModel extends ViewPropsModel, ViewStylerParamsModel {
  isCenter?: boolean;
  isDistribute?: boolean;
  isRowAlign?: boolean;
  spacing?: SpacingModel;
}
