import { _queryClient } from '@lib/frontend/query/utils/queryClient/_queryClient';
import type { QueryClientParamsModel } from '@lib/frontend/query/utils/queryClient/queryClient.models';

export const queryClient = async ({ ...params }: QueryClientParamsModel): Promise<void> => {
  return _queryClient({ ...params });
};
