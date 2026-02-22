import { _clean } from '@lib/backend/file/utils/clean/_clean';
import { type CleanModel, type CleanParamsModel } from '@lib/backend/file/utils/clean/clean.models';

export const clean = async (params: CleanParamsModel): Promise<CleanModel> => _clean(params);
