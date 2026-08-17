import { type PressableTitlePropsModel } from '@lib/frontend/core/components/PressableTitle/PressableTitle.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type PreviewListPropsModel<TType extends WithIdModel> = {
  items?: Array<TType & PressableTitlePropsModel & { image?: string }>;
  onDelete?(item: TType): Promise<void>;
};
