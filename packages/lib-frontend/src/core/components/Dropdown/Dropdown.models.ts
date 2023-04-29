import type { _DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/_Dropdown.models';
import type { WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface DropdownPropsModel extends _DropdownPropsModel {
  maxHeight?: number;
  width?: number;
}

export interface DropdownRefModel extends Pick<WrapperRefModel, 'scrollTo'> {
  isOpen: CallableModel<boolean>;
  toggle(isOpen?: boolean): void;
}
