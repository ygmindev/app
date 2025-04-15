import { type LFCModel } from '@lib/frontend/core/core.models';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { type GroupFormPropsModel } from '@lib/frontend/group/containers/GroupForm/GroupForm.models';
import { GroupNameForm } from '@lib/frontend/group/containers/GroupNameForm/GroupNameForm';
import { GroupTypesForm } from '@lib/frontend/group/containers/GroupTypesForm/GroupTypesForm';
import { useGroupResource } from '@lib/frontend/group/hooks/useGroupResource/useGroupResource';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type GroupFormModel } from '@lib/shared/group/resources/Group/Group.models';

export const GroupForm: LFCModel<GroupFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation([]);
  const { create } = useGroupResource();
  return (
    <StepForm<GroupFormModel>
      {...props}
      onSubmit={async (form) => {
        void create({ form });
      }}
      steps={[
        {
          element: <GroupNameForm />,
          id: 'name',
          title: t('core:name'),
        },
        {
          element: <GroupTypesForm />,
          id: 'types',
          title: t('group:types'),
        },
      ]}
    />
  );
};
