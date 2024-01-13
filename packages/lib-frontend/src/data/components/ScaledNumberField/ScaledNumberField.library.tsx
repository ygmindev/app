import { ScaledNumberField } from '@lib-frontend/data/components/ScaledNumberField/ScaledNumberField';
import { type ScaledNumberFieldPropsModel } from '@lib-frontend/data/components/ScaledNumberField/ScaledNumberField.models';
import { type LibraryPropsModel } from '@lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ScaledNumberFieldPropsModel> = {
  Component: ScaledNumberField,
  defaultProps: {},
  variants: [],
};
