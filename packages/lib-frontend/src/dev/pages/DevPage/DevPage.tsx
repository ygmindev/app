import { useEffect } from 'react';

import { useAccessResource } from '#lib-frontend/auth/hooks/useAccessResource/useAccessResource';
import { Loading } from '#lib-frontend/core/components/Loading/Loading';
import { type FCModel } from '#lib-frontend/core/core.models';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';

export const DevPage: FCModel<DevPagePropsModel> = () => {
  const { getManyUser } = useAccessResource();
  useEffect(() => {
    void getManyUser({ filter: [] });
  }, []);
  return <Loading />;
};
