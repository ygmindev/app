import type {
  FONTAWESOME_ICON,
  IONICON_ICON,
} from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';

export type IconTypeModel = IONICON_ICON | FONTAWESOME_ICON;

export interface WithIconPropsModel {
  icon?: IconTypeModel;
}
