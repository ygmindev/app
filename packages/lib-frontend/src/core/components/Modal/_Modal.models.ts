import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _ModalPropsModel extends DimensionModel, WithChildrenPropsModel {
  isDisabled?: boolean;
  isFullSize?: boolean;
  isOpen?: boolean;
  onClose?: CallableModel;
}
