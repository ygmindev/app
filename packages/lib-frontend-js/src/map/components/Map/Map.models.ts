import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type _MapPropsModel } from '@lib/frontend/map/components/Map/_Map.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';
import { type CoordinateModel } from '@lib/shared/map/map.models';

export type MapPropsModel = DimensionModel & Omit<_MapPropsModel, 'styling'>;

export type MapMarkerModel = CoordinateModel & ThemeColorPropsModel;
