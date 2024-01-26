import { type ItemPropsModel } from '@lib/frontend/core/components/Item/Item.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';

export type NotificationModel = Pick<ItemPropsModel, 'description' | 'icon'> &
  ThemeColorPropsModel & {
    id?: string;
    isInfinite?: boolean;
    title?: TranslatableTextModel;
  };
