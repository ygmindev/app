import { type ReactElement } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
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
    <Wrapper
      {...wrapperProps}
      isRowAlign
      s>
      {groups?.map((group) => (
        <FilterGroup
          key={group.id}
          {...group}
        />
      ))}
    </Wrapper>
  );
};
