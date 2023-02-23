import type { ChildrenPropsModel, TranslatableOptionModel } from '@lib/frontend/core/core.models';
import type { NavigationPropsModel } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout.models';

export interface NavigationBarPropsModel
  extends NavigationPropsModel<TranslatableOptionModel>,
    ChildrenPropsModel {}
