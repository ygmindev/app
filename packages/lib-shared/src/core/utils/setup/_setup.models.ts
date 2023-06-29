import { type SetupConfigModel } from '#lib-config/core/setup/setup.models';
import { type PartialModel } from '#lib-shared/core/core.models';

export type _SetupParamsModel = PartialModel<SetupConfigModel>;

export type _SetupModel = Promise<void>;
