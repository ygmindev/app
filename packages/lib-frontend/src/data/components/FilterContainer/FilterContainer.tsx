import { type ReactElement } from 'react';

import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { type FilterContainerPropsModel } from '#lib-frontend/data/components/FilterContainer/FilterContainer.models';
import { FilterGroup } from '#lib-frontend/data/components/FilterGroup/FilterGroup';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const FilterContainer = <TType,>({
  groups,
  ...props
}: LFCPropsModel<FilterContainerPropsModel<TType>>): ReactElement<
  LFCPropsModel<FilterContainerPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout
      {...wrapperProps}
      s>
      {groups?.map((group) => (
        <FilterGroup
          key={group.id}
          {...group}
        />
      ))}
    </MainLayout>
  );
};
