import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ThemeColorModel } from '#lib-frontend/style/style.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type NotificationModel = {
  color?: ThemeColorModel;
  isInfinite?: boolean;
  message?: string;
  title?: string;
} & WithIdModel &
  Pick<IconPropsModel, 'icon'>;

export type NotificationDataModel = {
  id?: string;
} & Omit<NotificationModel, 'id'>;

export type TranslatableNotificationModel = {
  message?: TranslatableTextModel;
  title?: TranslatableTextModel;
} & Omit<NotificationModel, 'title' | 'message'>;
