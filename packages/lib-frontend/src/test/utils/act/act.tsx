import { _act } from '@lib/frontend/test/utils/act/_act';
import { type ActModel, type ActParamsModel } from '@lib/frontend/test/utils/act/act.models';

export const act = async (params: ActParamsModel): Promise<ActModel> => _act(params);
