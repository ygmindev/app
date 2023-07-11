import { _cleanup } from '#lib-shared/core/utils/cleanup/_cleanup';
import {
  type CleanupModel,
  type CleanupParamsModel,
} from '#lib-shared/core/utils/cleanup/cleanup.models';

export const cleanup = (params: CleanupParamsModel): CleanupModel => _cleanup(params);
