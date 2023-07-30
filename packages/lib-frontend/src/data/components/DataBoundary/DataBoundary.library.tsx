import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { type DataBoundaryPropsModel } from '#lib-frontend/data/components/DataBoundary/DataBoundary.models';

export const props: LibraryPropsModel<DataBoundaryPropsModel> = {
  Component: DataBoundary,
  defaultProps: {},
  variants: [],
};
