import {
  type InitializeModel,
  type InitializeParamsModel,
} from '@backend/lambda-graphql/setup/utils/initialize/initialize.models';
import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';

export const initialize = async ({
  ...params
}: InitializeParamsModel): Promise<InitializeModel> => {
  await initializeBackend({ ...params });
};
