import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type ThemeSizeModel } from '#lib-frontend/style/style.models';

export type CirclePropsModel = ChildrenPropsModel & {
  size?: ThemeSizeModel | number;
};
