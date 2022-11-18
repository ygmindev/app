import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { ThemeColorModel } from '@lib/frontend/styling/utils/theme/theme.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';

export interface NotificationModel extends WithIdModel, WithIconPropsModel {
  color?: ThemeColorModel;
  isInfinite?: boolean;
  isRemoving?: boolean;
  message?: string;
  title?: string;
}

export interface NotificationDataModel extends Omit<NotificationModel, 'id' | 'title' | 'message'> {
  id?: string;
  message?: TranslationTextModel;
  title?: TranslationTextModel;
}

export interface NotificationPropsModel extends NotificationModel {}
