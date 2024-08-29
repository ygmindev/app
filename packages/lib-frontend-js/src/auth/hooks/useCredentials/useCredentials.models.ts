import { type CredentialsModel } from '@lib/shared/auth/auth.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type UseCredentialsParamsModel = EmptyObjectModel;

export type UseCredentialsModel = {
  getCredentials(): Promise<CredentialsModel>;
};
