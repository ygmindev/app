import { type TitlePropsModel } from '@lib/frontend/core/components/Title/Title.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';

export type NotificationModel = Pick<TitlePropsModel, 'description' | 'icon'> &
  ThemeColorPropsModel & {
    duration?: number;
    id?: string;
    isInfinite?: boolean;
    title?: AsyncTextModel;
  };
