import { type ReactElement } from 'react';

import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { TextField } from '#lib-frontend/form/components/TextField/TextField';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { RESOURCE_FILTER_FIELD_TYPE } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.constants';
import { type ResourceFilterFieldPropsModel } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.models';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const ResourceFilterField = <TType, TForm = undefined, TRoot = undefined>({
  id,
  testID,
  type = RESOURCE_FILTER_FIELD_TYPE.STRING,
  ...props
}: SFCPropsModel<ResourceFilterFieldPropsModel<TType, TForm, TRoot>>): ReactElement<
  SFCPropsModel<ResourceFilterFieldPropsModel<TType, TForm, TRoot>>
> => {
  const { t } = useTranslation();
  const theme = useTheme();
  switch (type) {
    case RESOURCE_FILTER_FIELD_TYPE.STRING:
      return (
        <TextField
          {...props}
          label={`${id} ${t('core:contains')}`}
          width={theme.layout.width[THEME_SIZE.SMALL]}
        />
      );
    default:
      return <></>;
  }
};
