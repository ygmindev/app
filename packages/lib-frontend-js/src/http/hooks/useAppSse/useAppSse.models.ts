import {
  type UseSseModel,
  type UseSseParamsModel,
} from '@lib/frontend/http/hooks/useSse/useSse.models';

export type UseAppSseParamsModel = Omit<UseSseParamsModel, 'uri'>;

export type UseAppSseModel = UseSseModel;
