import type {
  FONTAWESOME_ICON,
  IONICON_ICON,
} from '@lib/frontend/core/components/Icon/_Icon.constants';
import type { _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';

export interface WithIconModel {
  icon?: IconTypeModel;
}

export interface IconPropsModel
  extends _IconPropsModel,
    Pick<
      PressPropsModel,
      | 'onPress'
      | 'confirmMessage'
      | 'isDisabled'
      | 'isPressed'
      | 'from'
      | 'to'
      | 'tooltip'
      | 'isCenter'
    >,
    TextPropsModel {}

export type IconTypeModel = IONICON_ICON | FONTAWESOME_ICON;
