import type { AdminHomePagePropsModel } from '#lib-frontend/admin/pages/AdminHomePage/AdminHomePage.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '#lib-frontend/core/core.models';

export const AdminHomePage: FCModel<AdminHomePagePropsModel> = ({ testID }) => {
  return <Wrapper testID={testID}></Wrapper>;
};
