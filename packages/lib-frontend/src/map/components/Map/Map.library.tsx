import { Map } from '@lib/frontend/map/components/Map/Map';
import { type MapPropsModel } from '@lib/frontend/map/components/Map/Map.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<MapPropsModel> = {
  Component: Map,
  defaultProps: {},
  variants: [],
};
