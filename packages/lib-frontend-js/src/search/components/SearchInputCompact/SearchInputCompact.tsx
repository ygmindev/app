import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { sleepForEffect } from '@lib/frontend/animation/utils/sleepForEffect/sleepForEffect';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { type SearchInputRefModel } from '@lib/frontend/search/components/SearchInput/SearchInput.models';
import { type SearchInputCompactPropsModel } from '@lib/frontend/search/components/SearchInputCompact/SearchInputCompact.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { useRef } from 'react';

export const SearchInputCompact: LFCModel<SearchInputCompactPropsModel> = ({
  elementState,
  onElementStateChange,
  ...props
}) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { elementStateControlled, elementStateControlledSet, isActive } = useElementStateControlled(
    { elementState, onElementStateChange },
  );
  const inputRef = useRef<SearchInputRefModel>(null);

  const handleToggle = async (): Promise<void> => {
    elementStateControlledSet(isActive ? ELEMENT_STATE.INACTIVE : ELEMENT_STATE.ACTIVE);
    await sleep(1000);
    if (!isActive) {
      await sleepForEffect();
      inputRef.current?.focus?.();
    }
  };

  return (
    <Wrapper
      {...wrapperProps}
      animation={{
        states: {
          [ELEMENT_STATE.ACTIVE]: { width: theme.shape.width[THEME_SIZE.LARGE] },
          [ELEMENT_STATE.INACTIVE]: { width: theme.shape.height[THEME_SIZE.MEDIUM] },
        },
      }}
      elementState={elementStateControlled}
      isOverflowHidden
      onElementStateChange={elementStateControlledSet}
      position={SHAPE_POSITION.RELATIVE}>
      <Appearable isActive={!isActive}>
        <Button
          icon="search"
          onPress={() => {
            void handleToggle();
          }}
          type={BUTTON_TYPE.TRANSPARENT}
        />
      </Appearable>

      <TextInput
        label="test"
        ref={inputRef}
      />

      {/* <Appearable
        isActive={isActive}
        isLazy={false}> */}
      {/* <SearchInput
        {...props}
        onBlur={() => elementStateControlledSet(ELEMENT_STATE.INACTIVE)}
        ref={inputRef}
      /> */}
      {/* </Appearable> */}
    </Wrapper>
  );
};
