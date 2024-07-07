import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { type NamableComponentModel, type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import {
  type SearchInputPropsModel,
  type SearchInputRefModel,
} from '@lib/frontend/search/components/SearchInput/SearchInput.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { type ForwardedRef, forwardRef, type ReactElement } from 'react';

export const SearchInput = forwardRef(
  <TType extends MenuOptionModel>(
    { placeholder, ...props }: RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>,
    _: ForwardedRef<SearchInputRefModel>,
  ) => {
    const { t } = useTranslation();
    return (
      <MenuInput
        {...props}
        icon="search"
        placeholder={placeholder ?? t('core:search')}
      />
    );
  },
) as NamableComponentModel<
  <TType extends MenuOptionModel = MenuOptionModel>(
    props: RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>,
  ) => ReactElement<RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>>
>;

process.env.APP_IS_DEBUG && (SearchInput.displayName = variableName({ SearchInput }));
