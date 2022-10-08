import type { ModalPropsModel } from '@lib/frontend/core/components/Modal/Modal.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface EntityResourceModalPropsModel
  extends WithTestIdModel,
    Pick<ModalPropsModel, 'isOpen' | 'onClose'> {}
