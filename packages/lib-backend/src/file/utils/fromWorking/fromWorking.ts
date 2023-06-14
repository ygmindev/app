import { join } from 'path';

import type {
  FromWorkingModel,
  FromWorkingParamsModel,
} from '#lib-backend/file/utils/fromWorking/fromWorking.models';

export const fromWorking = (...paths: FromWorkingParamsModel): FromWorkingModel =>
  join(process.cwd(), ...paths);
