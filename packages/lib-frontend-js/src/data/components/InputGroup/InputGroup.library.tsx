import { InputGroup } from '@lib/frontend/data/components/InputGroup/InputGroup';
import { type InputGroupPropsModel } from '@lib/frontend/data/components/InputGroup/InputGroup.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<InputGroupPropsModel> = {
  Component: InputGroup,
  defaultProps: {},
  variants: [],
};
