import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type RouteGroupPropsModel = {
  label?: TranslatableTextModel;
  root?: string | true;
  routes?: Array<TranslatableOptionModel & Pick<LineItemPropsModel, 'value'>>;
};
