import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';

export type NotificationModel = WithIconPropsModel &
  ThemeColorPropsModel & {
    description?: AsyncTextModel;
    duration?: number;
    id?: string;
    isInfinite?: boolean;
    title?: AsyncTextModel;
  };
