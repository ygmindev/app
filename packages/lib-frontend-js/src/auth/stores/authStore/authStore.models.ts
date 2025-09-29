import { type AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { type ReducerModel } from '@lib/frontend/state/state.models';

export type AuthStateModel = {
  status?: AUTH_STATUS;
  token?: {
    access?: string;
  };
};

export type AuthReducerModel = ReducerModel<AuthStateModel>;
