import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface ErrorTooltipPropsModel extends WithTestIdModel {
  error: TranslationTextModel;
}
