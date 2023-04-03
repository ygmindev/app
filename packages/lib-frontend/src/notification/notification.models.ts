import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { TranslatableModel } from '@lib/frontend/locale/locale.models';
import type { ThemeColorModel } from '@lib/frontend/style/style.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';

export interface NotificationModel extends WithIdModel, Pick<IconPropsModel, 'icon'> {
  color?: ThemeColorModel;
  isInfinite?: boolean;
  message?: string;
  title?: string;
}

export interface NotificationDataModel extends Omit<NotificationModel, 'id'> {
  id?: string;
}

export type TranslatableNotificationModel = TranslatableModel<
  NotificationModel,
  'title' | 'message'
>;