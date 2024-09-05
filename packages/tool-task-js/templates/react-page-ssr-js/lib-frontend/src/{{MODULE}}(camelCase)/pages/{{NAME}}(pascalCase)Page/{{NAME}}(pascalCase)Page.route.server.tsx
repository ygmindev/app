import { type {{NAME}}(pascalCase)PageParamsModel } from '@lib/frontend/{{MODULE}}(camelCase)/pages/{{NAME}}(pascalCase)Page/{{NAME}}(pascalCase)Page.models';
import { {{NAME}}(camelCase)Route as {{NAME}}(camelCase)RouteBase } from '@lib/frontend/{{MODULE}}(camelCase)/pages/{{NAME}}(pascalCase)Page/{{NAME}}(pascalCase)Page.route.base';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const {{NAME}}(camelCase)Route: RouteModel<undefined, {{NAME}}(pascalCase)PageParamsModel> = {
  ...{{NAME}}(camelCase)RouteBase,
  loaders: {
    data: async () => 'data',
  },
};
