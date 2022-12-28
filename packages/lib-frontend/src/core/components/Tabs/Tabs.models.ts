import type { OptionModel } from '@lib/frontend/core/core.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';

export interface TabsPropsModel extends WithFieldPropsModel {
  isVertical?: boolean;
  tabs: Array<OptionModel>;
}
