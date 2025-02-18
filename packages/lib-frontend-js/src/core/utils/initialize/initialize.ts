import { Container } from '@lib/backend/core/utils/Container/Container';
import { type InitializeModel } from '@lib/frontend/core/utils/initialize/initialize.models';

let result: InitializeModel;

export const initialize = (): InitializeModel => {
  if (!result) {
    result = {};
    result.container = new Container();
  }

  return result;
};
