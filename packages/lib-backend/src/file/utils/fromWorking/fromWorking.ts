import type {
  FromWorkingModel,
  FromWorkingParamsModel,
} from '@lib/backend/file/utils/fromWorking/fromWorking.models';
import { join } from 'path';

export const fromWorking = (...paths: FromWorkingParamsModel): FromWorkingModel =>
  join(process.cwd(), ...paths);
