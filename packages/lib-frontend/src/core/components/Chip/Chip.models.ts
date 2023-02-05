import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { ColorStylerParamsModel } from '@lib/frontend/style/utils/styler/colorStyler/colorStyler.models';

export interface ChipPropsModel extends ChildrenPropsModel<string>, ColorStylerParamsModel {}
