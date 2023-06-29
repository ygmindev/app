import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type ColorStylerParamsModel } from '#lib-frontend/style/utils/styler/colorStyler/colorStyler.models';

export type ChipPropsModel = ChildrenPropsModel<string> & ColorStylerParamsModel;
