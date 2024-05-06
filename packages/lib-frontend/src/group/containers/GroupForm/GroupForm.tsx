import { type LFCModel } from '@lib/frontend/core/core.models';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { GROUP_FORM_INITIAL_VALUES } from '@lib/frontend/group/containers/GroupForm/GroupForm.constants';
import { type GroupFormPropsModel } from '@lib/frontend/group/containers/GroupForm/GroupForm.models';
import { GroupNameForm } from '@lib/frontend/group/containers/GroupNameForm/GroupNameForm';
import { GroupTypesForm } from '@lib/frontend/group/containers/GroupTypesForm/GroupTypesForm';
import { useGroupResource } from '@lib/frontend/group/hooks/useGroupResource/useGroupResource';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';

export const GroupForm: LFCModel<GroupFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation([]);
  const { create } = useGroupResource();
  return (
    <StepForm
      {...props}
      initialValues={GROUP_FORM_INITIAL_VALUES}
      // onSuccess={async () => replace({ pathname: `${GROUP}/${IN_PROGRESS}` })}
      onSubmit={async (form) => create({ form })}
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
