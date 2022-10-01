import type { OptionModel } from '@lib/frontend/core/core.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface TabsPropsModel extends WithFieldPropsModel, WithTestIdModel {
  isVertical?: boolean;
  tabs: Array<OptionModel>;
}
