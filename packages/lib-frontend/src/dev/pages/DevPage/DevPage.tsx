import { Loading } from '#lib-frontend/core/components/Loading/Loading';
import { type FCModel } from '#lib-frontend/core/core.models';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';

export const DevPage: FCModel<DevPagePropsModel> = () => {
  return <Loading />;
};
