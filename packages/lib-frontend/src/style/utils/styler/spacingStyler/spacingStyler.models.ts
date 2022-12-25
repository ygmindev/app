import type { ThemeSizeModel } from '@lib/frontend/style/style.models';

export type SpacingModel = number | boolean | ThemeSizeModel;

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
