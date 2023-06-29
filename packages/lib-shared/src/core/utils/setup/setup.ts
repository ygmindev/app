import { _setup } from '#lib-shared/core/utils/setup/_setup';
import { type SetupModel, type SetupParamsModel } from '#lib-shared/core/utils/setup/setup.models';

export const setup = async ({ onInitialize, ...params }: SetupParamsModel): SetupModel => {
  onInitialize && (await onInitialize());
  return _setup({ ...params });
};
