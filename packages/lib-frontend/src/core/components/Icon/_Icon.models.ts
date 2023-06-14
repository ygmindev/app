import type { ICONS } from '#lib-frontend/core/components/Icon/Icon.constants';

export interface _IconPropsModel {
  icon?: keyof typeof ICONS;
}
