import { Icon } from '@lib-frontend/core/components/Icon/Icon';
import { type LFCModel } from '@lib-frontend/core/core.models';
import { TextField } from '@lib-frontend/data/components/TextField/TextField';
import { useTranslation } from '@lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type SearchFieldPropsModel } from '@lib-frontend/search/components/SearchField/SearchField.models';
import { THEME_SIZE } from '@lib-frontend/style/style.constants';

export const SearchField: LFCModel<SearchFieldPropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <TextField
      {...props}
      leftElement={<Icon icon="search" />}
      placeholder={props.placeholder ?? t('core:search')}
      size={THEME_SIZE.MEDIUM}
    />
  );
};
