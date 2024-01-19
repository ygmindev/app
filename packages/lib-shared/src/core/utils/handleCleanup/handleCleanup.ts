import { _handleCleanup } from '@lib/shared/core/utils/handleCleanup/_handleCleanup';
import {
  type HandleCleanupModel,
  type HandleCleanupParamsModel,
} from '@lib/shared/core/utils/handleCleanup/handleCleanup.models';

export const handleCleanup = (params: HandleCleanupParamsModel): Promise<HandleCleanupModel> =>
  _handleCleanup(params);
