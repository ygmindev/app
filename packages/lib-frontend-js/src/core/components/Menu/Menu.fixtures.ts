import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { withId } from '@lib/shared/core/utils/withId/withId';

export const MENU_FIXTURE_OPTIONS: Array<MenuOptionModel> = withId([
  { label: 'option 1' },
  { label: 'option 2' },
  { label: 'option 3' },
]);
