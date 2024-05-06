import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { Price } from '@lib/frontend/commerce/components/Price/Price';
import { type PricePropsModel } from '@lib/frontend/commerce/components/Price/Price.models';

export const props: LibraryPropsModel<PricePropsModel> = {
  Component: Price,
  defaultProps: {},
  variants: [],
};
