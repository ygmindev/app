import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type RouteListPropsModel = {
  root?: string | boolean | number;
  routes?: Array<RouteModel & { description?: TranslatableTextModel }>;
  title?: TranslatableTextModel;
};
