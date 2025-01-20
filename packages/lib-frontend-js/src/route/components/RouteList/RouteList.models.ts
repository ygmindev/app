import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type RouteListPropsModel = {
  root?: string | boolean | number;
  routes?: Array<RouteModel & { description?: AsyncTextModel }>;
  title?: AsyncTextModel;
};
