import {
  type FromWorkingModel,
  type FromWorkingParamsModel,
} from '@lib/backend/file/utils/fromWorking/fromWorking.models';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';

export const fromWorking = (...paths: FromWorkingParamsModel): FromWorkingModel =>
  joinPaths([process.cwd(), ...paths]);
