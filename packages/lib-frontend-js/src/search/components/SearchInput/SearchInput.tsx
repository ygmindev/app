import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { type NamableComponentModel, type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type SearchInputPropsModel,
  type SearchInputRefModel,
} from '@lib/frontend/search/components/SearchInput/SearchInput.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { type ForwardedRef, forwardRef, type ReactElement, useState } from 'react';

export const SearchInput = forwardRef(
  <TType extends MenuOptionModel>(
    {
      defaultValue,
      onChange,
      onSearch,
      value,
      ...props
    }: RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>,
    _: ForwardedRef<SearchInputRefModel>,
  ) => {
    const [options, optionsSet] = useState<Array<TType>>([]);

    const handleSearch = async (query?: string): Promise<void> => {
      optionsSet((await onSearch(query)) ?? []);
    };

    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    return (
      <MenuInput
        {...props}
        defaultValue={defaultValue?.id}
        onBlur={() => optionsSet([])}
        onChange={(v) => valueControlledSet(options.find((option) => option.id === v))}
        onSearch={(query) => {
          void handleSearch(query);
        }}
        options={options}
        value={valueControlled?.id}
      />
    );
  },
) as NamableComponentModel<
  <TType extends MenuOptionModel = MenuOptionModel>(
    props: RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>,
  ) => ReactElement<RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>>
>;

process.env.APP_IS_DEBUG && (SearchInput.displayName = variableName({ SearchInput }));
