import type { ReactElement } from 'react';

import type { LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type LineGroupPropsModel = {
  emptyString?: TranslatableTextModel;
  title?: string;
} & ChildrenPropsModel<
  ReactElement<LineItemPropsModel> | Array<ReactElement<LineItemPropsModel>> | null
>;
