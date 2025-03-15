import { CONNECTIVITY } from '@lib/frontend/http/http.constants';
import { type _GetConnectivityModel } from '@lib/frontend/http/utils/getConnectivity/_getConnectivity.models';

export const _getConnectivity = async (): Promise<_GetConnectivityModel> => {
  return CONNECTIVITY.OFFLINE;
};
