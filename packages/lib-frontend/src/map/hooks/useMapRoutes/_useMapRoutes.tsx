import { useMutation } from '#lib-frontend/data/hooks/useMutation/useMutation';
import { useHttp } from '#lib-frontend/http/hooks/useHttp/useHttp';
import { type _UseMapRoutesModel } from '#lib-frontend/map/hooks/useMapRoutes/_useMapRoutes.models';

export const _useMapRoutes = (): _UseMapRoutesModel => {
  const { post } = useHttp();

  const query: _UseMapRoutesModel['getRoutes'] = async ({}) => {
    return {
      distance: 1,
      duration: '',
      polyline: '',
    };
  };

  const { mutate } = useMutation('routes', query);
  return { data, query: mutate };
};
