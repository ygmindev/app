import { _cleanUp } from '#lib-shared/core/utils/cleanUp/_cleanUp';
import {
  type CleanUpModel,
  type CleanUpParamsModel,
} from '#lib-shared/core/utils/cleanUp/cleanUp.models';

export const cleanUp = (params: CleanUpParamsModel): CleanUpModel => _cleanUp(params);
