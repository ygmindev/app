import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';
import { type ReactNode } from 'react';

export type AppStateModel = {
  dimension: DimensionModel;
  isLoading?: boolean;
  isOffline?: boolean;
  portals?: Record<string, Array<{ name: string; node: ReactNode }>>;
};

export type AppActionsParamsModel = EmptyObjectModel;

export type AppReducerModel = ReducerModel<AppStateModel, AppActionsParamsModel>;
