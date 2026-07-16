import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type SliceModel } from '@lib/frontend/state/state.models';

export type AppStateModel = {
  dimension: DimensionModel;
  isLoading?: boolean;
  isOffline?: boolean;
  layout: {
    isMinimized: boolean;
  };
};

export type AppSliceModel = SliceModel<AppStateModel>;
