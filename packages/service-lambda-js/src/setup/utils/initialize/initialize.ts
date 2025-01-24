import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import {
  type InitializeModel,
  type InitializeParamsModel,
} from '@service/lambda/setup/utils/initialize/initialize.models';

let result: InitializeModel;

export const initialize = async ({
  ...params
}: InitializeParamsModel): Promise<InitializeModel> => {
  if (!result) {
    result = await initializeBackend({ ...params });
  }
  return result;
};
