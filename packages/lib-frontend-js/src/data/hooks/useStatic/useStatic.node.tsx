import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { useStatic as useStaticBase } from '@lib/frontend/data/hooks/useStatic/useStatic.base';
import {
  type UseStaticModel,
  type UseStaticParamsModel,
} from '@lib/frontend/data/hooks/useStatic/useStatic.models';
import { readFileSync } from 'fs';

export const useStatic = <TType,>({ src }: UseStaticParamsModel<TType>): UseStaticModel<TType> => {
  const value = readFileSync(fromStatic('public', src), 'utf8') as TType;
  return useStaticBase({ query: async () => value, src });
};
