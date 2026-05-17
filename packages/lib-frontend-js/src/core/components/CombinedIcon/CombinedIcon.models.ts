import { type ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import { type IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type PositionModel } from '@lib/frontend/core/core.models';

export type CombinedIconPropsModel = Omit<IconPropsModel, 'icon'> & {
  icons: Array<{
    icon: keyof typeof ICONS;
    position?: PositionModel;
  }>;
};
