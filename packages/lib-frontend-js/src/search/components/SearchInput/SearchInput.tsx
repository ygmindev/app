import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { type NamableComponentModel, type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import {
  type SearchInputPropsModel,
  type SearchInputRefModel,
} from '@lib/frontend/search/components/SearchInput/SearchInput.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { type ForwardedRef, forwardRef, type ReactElement, useState } from 'react';

export const SearchInput = forwardRef(
  <TType extends MenuOptionModel>(
    { onSearch, ...props }: RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>,
    _: ForwardedRef<SearchInputRefModel>,
  ) => {
    const [options, optionsSet] = useState<Array<TType>>([]);

    const handleSearch = async (query?: string): Promise<void> => {
      optionsSet((await onSearch(query)) ?? []);
    };

    return (
      <MenuInput
        {...props}
        onBlur={() => optionsSet([])}
        onSearch={(query) => {
          void handleSearch(query);
        }}
        options={options}
      />
    );
  },
) as NamableComponentModel<
  <TType extends MenuOptionModel = MenuOptionModel>(
    props: RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>,
  ) => ReactElement<RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>>
>;

process.env.APP_IS_DEBUG && (SearchInput.displayName = variableName({ SearchInput }));
