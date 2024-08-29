import { getNetworkStateAsync, NetworkStateType } from 'expo-network';

import { CONNECTIVITY } from '@lib/frontend/http/http.constants';
import { type _GetConnectivityModel } from '@lib/frontend/http/utils/getConnectivity/_getConnectivity.models';

export const _getConnectivity = async (): Promise<_GetConnectivityModel> => {
  const { isInternetReachable, type } = await getNetworkStateAsync();
  if (isInternetReachable) {
    switch (type) {
      case NetworkStateType.CELLULAR:
        return CONNECTIVITY.CELLULAR;
      case NetworkStateType.ETHERNET:
        return CONNECTIVITY.ETHERNET;
      case NetworkStateType.WIFI:
        return CONNECTIVITY.WIFI;
      default:
        return CONNECTIVITY.UNKNOWN;
    }
  }
  return CONNECTIVITY.OFFLINE;
};
