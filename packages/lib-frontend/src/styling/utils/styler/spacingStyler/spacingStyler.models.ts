import type { ThemeBasicSizeModel } from '@lib/frontend/styling/utils/theme/theme.models';

export type SpacingModel = number | boolean | ThemeBasicSizeModel;

export interface SpacingStylerParamsModel {
  m?: SpacingModel | 'auto';
  mBottom?: SpacingModel | 'auto';
  mHorizontal?: SpacingModel | 'auto';
  mLeft?: SpacingModel | 'auto';
  mRight?: SpacingModel | 'auto';
  mTop?: SpacingModel | 'auto';
  mVertical?: SpacingModel | 'auto';
  p?: SpacingModel;
  pBottom?: SpacingModel;
  pHorizontal?: SpacingModel;
  pLeft?: SpacingModel;
  pRight?: SpacingModel;
  pTop?: SpacingModel;
  pVertical?: SpacingModel;
}
