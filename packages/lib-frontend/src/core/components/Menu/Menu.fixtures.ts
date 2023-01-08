import type { TranslatableOptionModel } from '@lib/frontend/locale/locale.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export const MENU_FIXTURE_OPTIONS: Array<TranslatableOptionModel> = withId([
  { label: 'option 1' },
  { label: 'option 2' },
  { isDivider: true },
  { label: 'option 3' },
]);
