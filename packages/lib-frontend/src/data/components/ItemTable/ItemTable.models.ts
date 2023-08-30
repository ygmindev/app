import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';

export type ItemTablePropsModel = {
  data: Array<Pick<IconPropsModel, 'icon'> & { description?: string; title?: string }>;
};
