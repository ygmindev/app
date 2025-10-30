import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import {
  type UseStaticModel,
  type UseStaticParamsModel,
} from '@lib/frontend/data/hooks/useStatic/useStatic.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';

export const useStatic = <TType,>({
  query,
  src,
}: UseStaticParamsModel<TType>): UseStaticModel<TType> => {
  const { data } = useQuery<void, TType>(src, async () => {
    if (src.startsWith('/')) {
      return (await query?.()) ?? null;
    }
    throw new InvalidArgumentError('src must start with /');
  });
  return data;
};
