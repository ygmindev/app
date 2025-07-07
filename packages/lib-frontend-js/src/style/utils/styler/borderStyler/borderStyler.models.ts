import { type CORNER, type DIRECTION } from '@lib/frontend/core/core.constants';
import { type THEME_ROLE, type THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type BORDER_STYLE } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { type PartialModel } from '@lib/shared/core/core.models';

export type BorderStylerParamsModel = {
  border?: DIRECTION | boolean;
  borderColor?: string;
  borderRole?: THEME_ROLE;
  borderStyle?: BORDER_STYLE;
  borderWidth?: number | boolean;
  isShadow?: boolean;
  round?:
    | PartialModel<Record<CORNER, THEME_SIZE | boolean | number>>
    | THEME_SIZE
    | boolean
    | number;
};
