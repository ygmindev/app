import { Button } from '@lib/frontend/core/components/Button/Button';
import { _DraggableList } from '@lib/frontend/core/components/DraggableList/_DraggableList';
import { type DraggableListPropsModel } from '@lib/frontend/core/components/DraggableList/DraggableList.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export const DraggableList = <TType extends WithIdModel>({
  defaultValue,
  element,
  onChange,
  value,
  ...props
}: LFCPropsModel<DraggableListPropsModel<TType>>): ReactElement<
  LFCPropsModel<DraggableListPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const theme = useTheme();
  return (
    <Wrapper {...wrapperProps}>
      <_DraggableList
        anchor={(isActive) => (
          <Button
            elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
            icon={isActive ? 'fist' : 'hand'}
          />
        )}
        onChange={valueControlledSet}
        render={({ anchor, i, isActive, item }) => (
          <Wrapper
            isAlign
            isRow
            opacity={isActive ? theme.opaque[THEME_SIZE.MEDIUM] : 1}>
            {anchor}

            <Wrapper flex>{element({ isActive, item }, i)}</Wrapper>
          </Wrapper>
        )}
        spacing={theme.shape.spacing[THEME_SIZE.MEDIUM]}
        value={valueControlled}
      />
    </Wrapper>
  );
};
