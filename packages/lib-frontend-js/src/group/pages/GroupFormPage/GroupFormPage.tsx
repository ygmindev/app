import { type LFCModel } from '@lib/frontend/core/core.models';
import { GroupForm } from '@lib/frontend/group/containers/GroupForm/GroupForm';
import { type GroupFormPagePropsModel } from '@lib/frontend/group/pages/GroupFormPage/GroupFormPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const GroupFormPage: LFCModel<GroupFormPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return <GroupForm {...wrapperProps} />;
};
