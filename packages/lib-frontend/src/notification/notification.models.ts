import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ThemeColorModel } from '#lib-frontend/style/style.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type NotificationModel = WithIdModel &
  Pick<IconPropsModel, 'icon'> & {
    color?: ThemeColorModel;
    isInfinite?: boolean;
    message?: string;
    title?: string;
  };

export type NotificationDataModel = {
  _id?: string;
} & Omit<NotificationModel, '_id'>;

export type TranslatableNotificationModel = Omit<NotificationModel, 'title' | 'message'> & {
  message?: TranslatableTextModel;
  title?: TranslatableTextModel;
};
