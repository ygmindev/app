import { _WrappedList } from '@lib/frontend/core/components/WrappedList/_WrappedList';
import { type WrappedListPropsModel } from '@lib/frontend/core/components/WrappedList/WrappedList.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type ReactElement } from 'react';

export const WrappedList = <TType extends unknown>({
  data,
  element,
  ...props
}: WrappedListPropsModel<TType>): ReactElement<WrappedListPropsModel<TType>> => {
  const theme = useTheme();
  return (
    <Wrapper {...props}>
      <_WrappedList
        data={data}
        element={element}
        margin={theme.shape.spacing[THEME_SIZE.MEDIUM]}
      />
    </Wrapper>
  );
};
