import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type PressableTitlePropsModel } from '@lib/frontend/core/components/PressableTitle/PressableTitle.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type PreviewListPropsModel<TType extends WithIdModel> = {
  emptyString?: AsyncTextModel;
  items?: Array<TType & PressableTitlePropsModel>;
};
