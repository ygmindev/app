import { type _ActModel, type _ActParamsModel } from '@lib/frontend/test/utils/act/_act.models';
import { act } from '@testing-library/react-native';

export const _act = async (params: _ActParamsModel): Promise<_ActModel> => act(params);
