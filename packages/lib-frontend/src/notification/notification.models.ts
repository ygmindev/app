import { type ItemPropsModel } from '#lib-frontend/core/components/Item/Item.models';
import { type ThemeColorPropsModel } from '#lib-frontend/style/style.models';

export type NotificationModel = Pick<ItemPropsModel, 'description' | 'icon' | 'title'> &
  ThemeColorPropsModel & {
    id?: string;
    isInfinite?: boolean;
  };
