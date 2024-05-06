import { type IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';

export type SwitchInputPropsModel = InputPropsModel<boolean> & {
  iconActive?: IconPropsModel['icon'];
  iconInactive?: IconPropsModel['icon'];
};

export type SwitchInputRefModel = InputRefModel<boolean>;
