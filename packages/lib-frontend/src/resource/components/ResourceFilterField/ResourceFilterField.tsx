import { type ReactElement } from 'react';

import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { TextField } from '#lib-frontend/form/components/TextField/TextField';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { RESOURCE_FILTER_FIELD_TYPE } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.constants';
import { type ResourceFilterFieldPropsModel } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const ResourceFilterField = <TType, TForm = undefined, TRoot = undefined>({
  id,
  testID,
  type = RESOURCE_FILTER_FIELD_TYPE.STRING,
  ...props
}: SFCPropsModel<ResourceFilterFieldPropsModel<TType, TForm, TRoot>>): ReactElement<
  SFCPropsModel<ResourceFilterFieldPropsModel<TType, TForm, TRoot>>
> => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  switch (type) {
    case RESOURCE_FILTER_FIELD_TYPE.STRING:
      return (
        <TextField
          label={`${id} ${t('core:contains')}`}
          style={styles}
          testID={testID}
        />
      );
    default:
      return <></>;
  }
};
