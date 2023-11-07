import { type ReactElement } from 'react';

import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type ThemeSizeModel } from '#lib-frontend/style/style.models';

export type MainLayoutPropsModel = ChildrenPropsModel & {
  size?: ThemeSizeModel;
  topElement?: ReactElement;
};
