import { type WithIconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ThemeColorModel } from '#lib-frontend/style/style.models';

export type NotificationModel = WithIconPropsModel & {
  color?: ThemeColorModel;
  id?: string;
  isInfinite?: boolean;
  message?: string;
  title?: string;
};

export type TranslatableNotificationModel = Omit<NotificationModel, 'title' | 'message'> & {
  message?: TranslatableTextModel;
  title?: TranslatableTextModel;
};
