import { type _DropdownPropsModel } from '#lib-frontend/core/components/Dropdown/_Dropdown.models';
import { type WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';

export type DropdownPropsModel = {
  maxHeight?: number;
  width?: number;
} & _DropdownPropsModel;

export type DropdownRefModel = {
  isOpen(): boolean;
  toggle(isOpen?: boolean): void;
} & Pick<WrapperRefModel, 'scrollTo'>;
