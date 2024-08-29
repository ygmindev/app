import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { validateNotEmpty } from '@lib/frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { GROUP_TYPES_OPTIONS } from '@lib/frontend/group/containers/GroupTypesForm/GroupTypesForm.constants';
import { type GroupTypesFormPropsModel } from '@lib/frontend/group/containers/GroupTypesForm/GroupTypesForm.models';
import { GROUP } from '@lib/frontend/group/group.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const GroupTypesForm: LFCModel<GroupTypesFormPropsModel> = ({
  initialValues,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { t } = useTranslation([GROUP]);
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: <SelectInput options={GROUP_TYPES_OPTIONS} />,
          id: 'types',
        },
      ]}
      initialValues={initialValues}
      isVerticalCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      topElement={() => <Text fontStyle={FONT_STYLE.HEADLINE}>{t('group:nameFormMessage')}</Text>}
      validators={{ types: validateNotEmpty }}
    />
  );
};
