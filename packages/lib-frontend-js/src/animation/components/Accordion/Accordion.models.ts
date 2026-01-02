import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type PressableTitlePropsModel } from '@lib/frontend/core/components/PressableTitle/PressableTitle.models';
import { type ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type ChildrenPropsModel, type SizablePropsModel } from '@lib/frontend/core/core.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';

export type AccordionPropsModel = ChildrenPropsModel &
  SizablePropsModel &
  ValuePropsModel<ELEMENT_STATE> &
  Omit<PressableTitlePropsModel, 'border' | 'children' | 'onPress'> & {
    isExpandable?: boolean;
    isTransparent?: boolean;
    rightTooltip?: AsyncTextModel;
  };
