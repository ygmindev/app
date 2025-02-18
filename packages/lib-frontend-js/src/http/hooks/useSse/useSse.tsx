import { _useSse } from '@lib/frontend/http/hooks/useSse/_useSse';
import {
  type UseSseModel,
  type UseSseParamsModel,
} from '@lib/frontend/http/hooks/useSse/useSse.models';

export const useSse = ({ ...props }: UseSseParamsModel): UseSseModel => _useSse({ ...props });
