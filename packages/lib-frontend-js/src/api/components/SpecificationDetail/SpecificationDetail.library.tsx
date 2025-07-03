import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { SpecificationDetail } from '@lib/frontend/api/components/SpecificationDetail/SpecificationDetail';
import { type SpecificationDetailPropsModel } from '@lib/frontend/api/components/SpecificationDetail/SpecificationDetail.models';

export const props: LibraryPropsModel<SpecificationDetailPropsModel<unknown>> = {
  Component: SpecificationDetail,
  defaultProps: {
    specification: {},
  },
  variants: [],
};
