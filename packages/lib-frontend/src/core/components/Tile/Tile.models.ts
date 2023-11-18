import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';

export type TilePropsModel = ChildrenPropsModel & Omit<LineItemPropsModel, 'children'>;
