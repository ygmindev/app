import { _useSse } from '@lib/frontend/http/hooks/useSse/_useSse';
import {
  type UseSseModel,
  type UseSseParamsModel,
} from '@lib/frontend/http/hooks/useSse/useSse.models';

export const useSse = ({ ...params }: UseSseParamsModel): UseSseModel => _useSse({ ...params });
