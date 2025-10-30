import { useStatic as useStaticBase } from '@lib/frontend/data/hooks/useStatic/useStatic.base';
import {
  type UseStaticModel,
  type UseStaticParamsModel,
} from '@lib/frontend/data/hooks/useStatic/useStatic.models';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { APP_URI } from '@lib/shared/http/http.constants';

export const useStatic = <TType,>({ src }: UseStaticParamsModel<TType>): UseStaticModel<TType> => {
  const { get } = useHttp();
  return useStaticBase({ query: async () => get({ url: `${APP_URI}${src}` }), src });
};
