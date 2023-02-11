import type { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export const MENU_FIXTURE_OPTIONS: Array<MenuOptionModel> = withId([
  { label: 'option 1' },
  { label: 'option 2' },
  { isDivider: true },
  { label: 'option 3' },
]);
