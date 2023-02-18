import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { NavigationPropsModel } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout.models';
import type { TranslatableOptionModel } from '@lib/frontend/locale/locale.models';

export interface NavigationBarPropsModel
  extends NavigationPropsModel<TranslatableOptionModel>,
    ChildrenPropsModel {}
