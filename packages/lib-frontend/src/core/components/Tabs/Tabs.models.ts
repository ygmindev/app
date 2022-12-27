import type { OptionModel } from '@lib/frontend/core/core.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface TabsPropsModel extends WithTestIdModel, WithFieldPropsModel {
  isVertical?: boolean;
  tabs: Array<OptionModel>;
}
