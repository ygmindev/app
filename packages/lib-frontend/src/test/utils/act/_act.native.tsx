import { act } from '@testing-library/react-native';

import { type _ActModel, type _ActParamsModel } from '#lib-frontend/test/utils/act/_act.models';

export const _act = async (params: _ActParamsModel): _ActModel => act(params);
