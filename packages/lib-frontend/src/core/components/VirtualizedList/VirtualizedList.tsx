import { _VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList';
import type { _VirtualizedListPropsModel } from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement } from 'react';

export const VirtualizedList = <TType extends WithIdModel>({
  ...props
}: SFCPropsModel<_VirtualizedListPropsModel<TType>>): ReactElement<
  SFCPropsModel<_VirtualizedListPropsModel<TType>>
> => {
  const { styles } = useStyles({ props });
  return (
    <_VirtualizedList<TType>
      {...props}
      style={styles}
    />
  );
};
