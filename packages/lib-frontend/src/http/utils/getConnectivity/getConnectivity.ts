import { _getConnectivity } from '@lib/frontend/http/utils/getConnectivity/_getConnectivity';
import { type GetConnectivityModel } from '@lib/frontend/http/utils/getConnectivity/getConnectivity.models';

export const getConnectivity = async (): Promise<GetConnectivityModel> => _getConnectivity();
