import { type InitializeModel } from '@app/web/setup/utils/initialize/initialize.models';

let result: InitializeModel;

export const initialize = async (): Promise<InitializeModel> => {
  if (!result) {
    result = {};
  }
  return result;
};
