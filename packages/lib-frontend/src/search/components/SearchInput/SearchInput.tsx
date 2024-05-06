import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type SearchInputPropsModel } from '@lib/frontend/search/components/SearchInput/SearchInput.models';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const SearchInput: LFCModel<SearchInputPropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <TextInput
      {...props}
      leftElement={<Icon icon="search" />}
      placeholder={props.placeholder ?? t('core:search')}
      size={THEME_SIZE.MEDIUM}
    />
  );
};
