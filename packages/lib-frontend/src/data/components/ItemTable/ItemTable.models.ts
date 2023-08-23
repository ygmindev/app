import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';

export type ItemTablePropsModel = {
  data: Array<IconPropsModel & { description?: string; title?: string }>;
};
