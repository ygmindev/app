import { RoutesField } from '@lib/frontend/aroom/components/RoutesField/RoutesField';
import { type RoutesFieldPropsModel } from '@lib/frontend/aroom/components/RoutesField/RoutesField.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<RoutesFieldPropsModel> = {
  Component: RoutesField,
  defaultProps: {},
  variants: [],
};
