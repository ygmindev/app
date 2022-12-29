import type { OptionModel } from '@lib/frontend/core/core.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export const MENU_FIXTURE_OPTIONS: Array<OptionModel> = withId([
  { label: 'option 1' },
  { label: 'option 2' },
  { isDivider: true },
  { label: 'option 3' },
]);
