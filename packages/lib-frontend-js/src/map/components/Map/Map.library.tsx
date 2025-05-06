import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { Map } from '@lib/frontend/map/components/Map/Map';
import { type MapPropsModel } from '@lib/frontend/map/components/Map/Map.models';

export const props: LibraryPropsModel<MapPropsModel> = {
  Component: Map,
  defaultProps: {
    zoom: 1,
  },
  variants: [],
};
