import type { _SheetConfigParamsModel } from '@lib/config/style/sheet/_sheet.models';
import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { forEach } from 'lodash';

export const _sheetConfig = ({ fonts, styles }: _SheetConfigParamsModel): void => {
  forEach(fonts, (v, k) => globalFontFace(k, { src: v }));

  forEach(styles, (v, k) => globalStyle(k, v));
};
