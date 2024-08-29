import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import {
  type InitializeModel,
  type InitializeParamsModel,
} from 'packages/service-lambda/src/setup/utils/initialize/initialize.models';

export const initialize = async ({
  ...params
}: InitializeParamsModel): Promise<InitializeModel> => {
  return initializeBackend({ ...params });
};
