import { type ReactElement } from 'react';

import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { RESOURCE_FILTER_PROPERTY_TYPE } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.constants';
import { type ResourceFilterFieldPropsModel } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const ResourceFilterField = <TType, TForm = undefined, TRoot = undefined>({
  _id,
  type = RESOURCE_FILTER_PROPERTY_TYPE.STRING,
  ...props
}: LFCPropsModel<ResourceFilterFieldPropsModel<TType, TForm, TRoot>>): ReactElement<
  LFCPropsModel<ResourceFilterFieldPropsModel<TType, TForm, TRoot>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const theme = useTheme();
  switch (type) {
    case RESOURCE_FILTER_PROPERTY_TYPE.STRING:
      return (
        <TextField
          {...wrapperProps}
          label={`${_id} ${t('core:contains')}`}
          width={theme.layout.width[THEME_SIZE.SMALL]}
        />
      );
    default:
      return <></>;
  }
};
