import type { WithOpenPropsModel } from '@lib/frontend/core/core.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';

export interface _ModalPropsModel
  extends DimensionModel,
    WithOpenPropsModel,
    WithChildrenPropsModel {
  isDisabled?: boolean;
  isFullSize?: boolean;
}
