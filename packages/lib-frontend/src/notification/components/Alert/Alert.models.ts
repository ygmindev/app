import type { WithIconModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { ThemeColorModel } from '@lib/frontend/styling/utils/theme/theme.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';

export interface AlertModel extends WithIdModel, WithIconModel {
  color?: ThemeColorModel;
  isPermanent?: boolean;
  message?: string;
  title?: string;
}

export interface AlertDataModel extends Omit<AlertModel, 'id' | 'title' | 'message'> {
  message?: TranslationTextModel;
  title?: TranslationTextModel;
}

export interface AlertPropsModel extends AlertModel {}
