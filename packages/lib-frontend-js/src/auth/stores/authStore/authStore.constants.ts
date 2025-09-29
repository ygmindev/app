import { type AuthReducerModel } from '@lib/frontend/auth/stores/authStore/authStore.models';

export enum AUTH_STATUS {
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated',
  UNKNOWN = 'unknown',
}

export const AUTH_REDUCER: AuthReducerModel = {
  defaultState: {
    status: AUTH_STATUS.UNKNOWN,
    token: {
      access: undefined,
    },
  },

  persist: true,
};
