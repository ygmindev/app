import { type THEME_SIZE, type THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';

export type SpacingModel = number | boolean | THEME_SIZE | THEME_SIZE_MORE;

export type SpacingStylerParamsModel = {
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
  s?: SpacingModel;
};
