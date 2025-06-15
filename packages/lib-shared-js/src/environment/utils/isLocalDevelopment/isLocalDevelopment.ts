import { type IsLocalDevelopmentModel } from '@lib/shared/environment/utils/isLocalDevelopment/isLocalDevelopment.models';

export const isLocalDevelopment: IsLocalDevelopmentModel =
  (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
  !process.env.NODE_RUNTIME;
