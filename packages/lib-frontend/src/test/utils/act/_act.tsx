import { act } from '@testing-library/react';

import type { _ActModel, _ActParamsModel } from '#lib-frontend/test/utils/act/_act.models';

export const _act = async (callback: _ActParamsModel): Promise<_ActModel> => act(callback);
