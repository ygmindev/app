import { FromWorkingModel, FromWorkingParamsModel } from '@lib/backend/file/utils/fromWorking/fromWorking.models';
import { resolve } from 'path';

export const fromWorking = (...paths: FromWorkingParamsModel): FromWorkingModel => resolve(process.cwd(), ...paths);
