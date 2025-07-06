import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type SearchInputPropsModel,
  type SearchInputRefModel,
} from '@lib/frontend/search/components/SearchInput/SearchInput.models';
import { type ReactElement, useState } from 'react';

export const SearchInput = <TType extends MenuOptionModel>({
  defaultValue,
  onBlur,
  onChange,
  onSearch,
  value,
  ...props
}: RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>): ReactElement<
  RLFCPropsModel<SearchInputRefModel, SearchInputPropsModel<TType>>
> => {
  const [options, optionsSet] = useState<Array<TType>>([]);

  const handleSearch = async (query?: string): Promise<void> => {
    optionsSet((await onSearch(query)) ?? []);
  };

  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });

  const handleBlur = (): void => {
    optionsSet([]);
    onBlur?.();
  };

  return (
    <MenuInput
      {...props}
      defaultValue={defaultValue?.id}
      onBlur={handleBlur}
      onChange={(v) => valueControlledSet(options.find((option) => option.id === v))}
      onSearch={handleSearch}
      options={options}
      value={valueControlled?.id}
    />
  );
};
