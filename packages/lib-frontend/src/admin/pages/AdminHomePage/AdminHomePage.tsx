import { AdminHome } from '@lib/frontend/admin/containers/AdminHome/AdminHome';
import type { FCModel, PagePropsModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const AdminHomePage: FCModel<PagePropsModel> = ({ initialState, testID }) => {
  return (
    <Root initialState={initialState}>
      <AdminHome testID={testID} />
    </Root>
  );
};
