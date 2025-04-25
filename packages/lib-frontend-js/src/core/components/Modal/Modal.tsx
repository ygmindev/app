import {
  ANIMATION_STATES_APPEARABLE_OPAQUE,
  ANIMATION_STATES_SLIDABLE_VERTICAL,
} from '@lib/frontend/animation/animation.constants';
import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { KeyboardContainer } from '@lib/frontend/core/components/KeyboardContainer/KeyboardContainer';
import {
  type ModalPropsModel,
  type ModalRefModel,
} from '@lib/frontend/core/components/Modal/Modal.models';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Swipeable } from '@lib/frontend/core/components/Swipeable/Swipeable';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { CORNER, DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
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
} from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { useImperativeHandle, useState } from 'react';

export const Modal: RLFCModel<ModalRefModel, ModalPropsModel> = ({
  children,
  height,
  isFullSize,
  isOpen,
  onToggle,
  ref,
  title,
  width,
}) => {
  const [deviceHeight] = useStore('app.dimension.height');
  const [measure, measureSet] = useState<MeasureModel>();
  const isOpenF = useValueDelayed(isOpen ?? false);
  const [swipe, swipeSet] = useState<PositionModel>();

  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue: false,
    onChange: onToggle,
    value: isOpen,
  });

  const theme = useTheme();
  const heightF =
    (isFullSize
      ? (deviceHeight ?? 0) - theme.shape.spacing[THEME_SIZE.LARGE]
      : (height ?? measure?.height)) ?? 0;

  useImperativeHandle(ref, () => ({ toggle: valueControlledSet }));

  const elementStateF = valueControlled ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE;
  return isOpenF || isOpen ? (
    <Portal>
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
            />

            {deviceHeight && (
              <Wrapper
                animation={{
                  isInitial: true,
                  states: ANIMATION_STATES_SLIDABLE_VERTICAL({
                    deviceHeight,
                    height: heightF,
                    offset: swipe?.y ?? 0,
                  }),
                }}
                backgroundColor={THEME_COLOR_MORE.SURFACE}
                elementState={elementStateF}
                flex={isFullSize}
                height={isFullSize ? heightF : undefined}
                isFullWidth={!width}
                isShadow
                left={0}
                mHorizontal="auto"
                onMeasure={measureSet}
                position={SHAPE_POSITION.ABSOLUTE}
                right={0}
                round={{ [CORNER.TOP_LEFT]: true, [CORNER.TOP_RIGHT]: true }}
                width={width}>
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
                      pVertical={THEME_SIZE.SMALL}>
                      {title && (
                        <Wrapper flex>
                          {isAsyncText(title) ? (
                            <AsyncText fontStyle={FONT_STYLE.TITLE}>{title}</AsyncText>
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
    </Portal>
  ) : null;
};

process.env.APP_IS_DEBUG && (Modal.displayName = variableName({ Modal }));
