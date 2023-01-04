import type { _SheetConfigParamsModel } from '@lib/config/style/sheet/_sheet.models';
import { forEach } from 'lodash';
import { cssRule, fontFace, getStyles } from 'typestyle';
import type { NestedCSSProperties } from 'typestyle/lib/types';

export const _sheetConfig = ({ fonts, styles }: _SheetConfigParamsModel): string => {
  forEach(fonts, (v, k) => fontFace({ fontFamily: k, src: v }));

  forEach(styles, (v, k) => cssRule(k, v as NestedCSSProperties));

  return getStyles();
};
