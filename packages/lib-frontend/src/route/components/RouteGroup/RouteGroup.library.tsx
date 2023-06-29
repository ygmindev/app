import { RouteGroup } from '#lib-frontend/route/components/RouteGroup/RouteGroup';
import { type RouteGroupPropsModel } from '#lib-frontend/route/components/RouteGroup/RouteGroup.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<RouteGroupPropsModel> = {
  Component: RouteGroup,
  defaultProps: {},
  variants: [],
};
