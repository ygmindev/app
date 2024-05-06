import { type _DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/_Dropdown.models';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';

export type DropdownPropsModel = Omit<
  _DropdownPropsModel,
  'delay' | 'maxWidth' | 'maxHeight' | 'offset'
> & {
  isHidden?: boolean;
  width?: number;
};

export type DropdownRefModel = Pick<WrapperRefModel, 'scrollTo'> & {
  toggle(isOpen?: boolean): void;
};
