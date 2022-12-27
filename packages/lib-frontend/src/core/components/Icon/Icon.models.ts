import type { _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';

export interface IconPropsModel
  extends _IconPropsModel,
    Pick<
      PressPropsModel,
      'onPress' | 'confirmMessage' | 'isDisabled' | 'isPressed' | 'from' | 'to' | 'isCenter'
    >,
    TextPropsModel {}
