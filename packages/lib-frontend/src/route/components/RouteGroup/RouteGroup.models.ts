import type { LineItemPropsModel } from '@lib/frontend/core/components/LineItem/LineItem.models';
import type { TranslatableOptionModel } from '@lib/frontend/core/core.models';
import type { RequiredModel } from '@lib/shared/core/core.models';

export interface RouteGroupPropsModel {
  groups?: Array<RouteGroupModel>;
  root?: string;
}

export interface RouteGroupModel
  extends RequiredModel<Pick<TranslatableOptionModel, 'id' | 'label'>> {
  options: Array<TranslatableOptionModel & Pick<LineItemPropsModel, 'value'>>;
}
