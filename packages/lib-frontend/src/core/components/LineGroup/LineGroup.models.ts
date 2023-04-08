import type { LineItemPropsModel } from '@lib/frontend/core/components/LineItem/LineItem.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { ReactElement } from 'react';

export interface LineGroupPropsModel
  extends ChildrenPropsModel<
    ReactElement<LineItemPropsModel> | Array<ReactElement<LineItemPropsModel>> | null
  > {
  title?: string;
}
