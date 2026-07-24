import { ANIMATION_STATES_APPEARABLE_OPAQUE } from '@lib/frontend/animation/animation.constants';
import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { KeyboardContainer } from '@lib/frontend/core/components/KeyboardContainer/KeyboardContainer';
import {
  BACKDROP_TEST_ID,
  MODAL_MIN_HEIGHT,
} from '@lib/frontend/core/components/Modal/Modal.constants';
import {
  type ModalPropsModel,
  type ModalRefModel,
} from '@lib/frontend/core/components/Modal/Modal.models';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Swipeable } from '@lib/frontend/core/components/Swipeable/Swipeable';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import {
  type MeasureModel,
  type PositionModel,
  type RLFCModel,
} from '@lib/frontend/core/core.models';
import { useValueDelayed } from '@lib/frontend/core/hooks/useValueDelayed/useValueDelayed';
import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
  Z_INDEX_ABOVE,
  Z_INDEX_TOP,
} from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { useImperativeHandle, useState } from 'react';

export const Modal: RLFCModel<ModalRefModel, ModalPropsModel> = ({
  children,
  defaultState,
  height,
  isFullSize,
  isFullWidth,
  isOpen,
  isPortal = true,
  onToggle,
  ref,
  title,
  width,
  ...props
}) => {
  const theme = useTheme();
  const [deviceHeight] = useStore('app.dimension.height');
  const [measure, measureSet] = useState<MeasureModel>();
  const measureSetF = debounce(measureSet, { duration: theme.animation.effect });
  const isOpenF = useValueDelayed(isOpen ?? false);
  const [swipe, swipeSet] = useState<PositionModel>();

  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue: defaultState === ELEMENT_STATE.ACTIVE ? true : false,
    onChange: onToggle,
    value: isOpen,
  });

  const heightF =
    (isFullSize
      ? (deviceHeight ?? 0) - theme.shape.spacing[THEME_SIZE.LARGE]
      : (height ?? measure?.height)) || MODAL_MIN_HEIGHT;

  useImperativeHandle(ref, () => ({ toggle: valueControlledSet }));

  const elementStateF = valueControlled ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE;

  const element = (
    <Exitable>
      {isOpen && (
        <>
          <Wrapper
            animation={{ states: ANIMATION_STATES_APPEARABLE_OPAQUE }}
            backgroundColor={THEME_COLOR_MORE.SURFACE}
            backgroundRole={THEME_ROLE.CONTRAST}
            elementState={elementStateF}
            isAbsoluteFill
            onPress={() => valueControlledSet(false)}
            testID={BACKDROP_TEST_ID}
            zIndex={Z_INDEX_ABOVE}
          />

          {deviceHeight && (
            <Wrapper
              animation={{
                isInitial: true,
                states: {
                  [ELEMENT_STATE.ACTIVE]: {
                    top: (deviceHeight - heightF) / 2 + (swipe?.y ?? 0),
                  },
                  [ELEMENT_STATE.INACTIVE]: {
                    top: deviceHeight,
                  },
                },
              }}
              backgroundColor={THEME_COLOR_MORE.SURFACE}
              elementState={elementStateF}
              height={heightF}
              isFullWidth={isFullWidth}
              isShadow
              left={0}
              mHorizontal="auto"
              onMeasure={measureSetF}
              position={SHAPE_POSITION.ABSOLUTE}
              right={0}
              round
              testID={props.testID}
              width={isFullWidth ? undefined : (width ?? theme.layout.width[THEME_SIZE.MEDIUM])}
              zIndex={Z_INDEX_TOP}>
              <Wrapper
                backgroundColor={THEME_COLOR_MORE.SURFACE}
                backgroundRole={THEME_ROLE.MUTED}
                height={theme.shape.spacing[THEME_SIZE.SMALL]}
                m="auto"
                round
                top={theme.shape.spacing[THEME_SIZE.MEDIUM]}
                width={theme.shape.size[THEME_SIZE_MORE.XLARGE]}
              />

              <KeyboardContainer>
                <Swipeable
                  onChange={swipeSet}
                  onEnd={() => swipeSet({ x: 0, y: 0 })}
                  onSwipe={(direction) =>
                    direction === DIRECTION.BOTTOM && onToggle && onToggle(false)
                  }>
                  <Wrapper
                    border={DIRECTION.BOTTOM}
                    isAlign
                    isRow
                    pHorizontal
                    pVertical={THEME_SIZE.SMALL}
                    testID={props.testID ? `${props.testID}-title` : undefined}>
                    {title && (
                      <Wrapper flex>
                        {isAsyncText(title) ? (
                          <AsyncText
                            casing={TEXT_CASING.CAPITALIZE}
                            fontStyle={FONT_STYLE.TITLE}>
                            {title}
                          </AsyncText>
                        ) : (
                          title
                        )}
                      </Wrapper>
                    )}

                    <Button
                      icon="times"
                      onPress={() => valueControlledSet(false)}
                      type={BUTTON_TYPE.INVISIBLE}
                    />
                  </Wrapper>
                </Swipeable>

                <Wrapper
                  flex
                  isVerticalScrollable
                  pVertical>
                  {children}
                </Wrapper>
              </KeyboardContainer>
            </Wrapper>
          )}
        </>
      )}
    </Exitable>
  );

  return isOpenF || valueControlled ? isPortal ? <Portal>{element}</Portal> : element : null;
};
