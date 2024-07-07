import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { SpecificationDetail } from '@lib-frontend/openapi/components/SpecificationDetail/SpecificationDetail';
import { type SpecificationDetailPropsModel } from '@lib-frontend/openapi/components/SpecificationDetail/SpecificationDetail.models';

export const props: LibraryPropsModel<SpecificationDetailPropsModel> = {
  Component: SpecificationDetail,
  defaultProps: {},
  variants: [],
};
