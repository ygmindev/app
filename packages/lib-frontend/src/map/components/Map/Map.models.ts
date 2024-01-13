import { type DimensionModel } from '@lib-frontend/core/core.models';
import { type _MapPropsModel } from '@lib-frontend/map/components/Map/_Map.models';

export type MapPropsModel = DimensionModel & Omit<_MapPropsModel, 'styling'>;
