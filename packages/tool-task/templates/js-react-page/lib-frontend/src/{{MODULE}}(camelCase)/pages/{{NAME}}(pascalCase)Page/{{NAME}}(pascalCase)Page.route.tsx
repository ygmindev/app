import { {{NAME}}(constantCase) } from '@lib/frontend/{{MODULE}}(camelCase)/{{MODULE}}(camelCase).constants';
import { {{NAME}}(pascalCase)Page } from '@lib/frontend/{{MODULE}}(camelCase)/pages/{{NAME}}(pascalCase)Page/{{NAME}}(pascalCase)Page';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const {{NAME}}(camelCase)Route: RouteModel = {
  element: <{{NAME}}(pascalCase)Page />,
  pathname: {{NAME}}(constantCase),
};
