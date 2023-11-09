import isString from 'lodash/isString';
import { forwardRef, useImperativeHandle } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { KeyboardContainer } from '#lib-frontend/core/components/KeyboardContainer/KeyboardContainer';
import { _Modal } from '#lib-frontend/core/components/Modal/_Modal';
import {
  type ModalPropsModel,
  type ModalRefModel,
} from '#lib-frontend/core/components/Modal/Modal.models';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '#lib-frontend/core/core.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Modal: RLFCModel<ModalRefModel, ModalPropsModel> = forwardRef(
  ({ children, elementState, header, height, isFullSize, isOpen, onToggle, width }, ref) => {
    const theme = useTheme();
    const { height: deviceHeight, width: deviceWidth } = useStore((state) => state.app.dimension);
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue: false,
      onChange: onToggle,
      value: isOpen,
    });

    useImperativeHandle(ref, () => ({ toggle: valueControlledSet }));

    return (
      <Portal>
        <_Modal
          deviceHeight={deviceHeight}
          deviceWidth={deviceWidth}
          elementState={elementState}
          height={height}
          isOpen={valueControlled}
          onToggle={valueControlledSet}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 'auto',
          }}
          width={width}>
          <Wrapper
            backgroundColor={THEME_COLOR_MORE.SURFACE}
            flex={isFullSize}
            isFullWidth
            isShadow
            mTop
            position={SHAPE_POSITION.RELATIVE}
            style={{
              borderTopLeftRadius: theme.shape.borderRadius[THEME_SIZE.MEDIUM],
              borderTopRightRadius: theme.shape.borderRadius[THEME_SIZE.MEDIUM],
            }}>
            <KeyboardContainer>
              <Wrapper
                flex
                p>
                <Wrapper isRowAlign>
                  <Wrapper
                    flex
                    isRowAlign>
                    {isString(header) ? <Text type={FONT_TYPE.TITLE}>{header}</Text> : header}
                  </Wrapper>

                  <Button
                    icon="times"
                    onPress={() => valueControlledSet(false)}
                    type={BUTTON_TYPE.INVISIBLE}
                  />
                </Wrapper>

                <Wrapper
                  flex
                  isCenter>
                  {children}
                </Wrapper>
              </Wrapper>
            </KeyboardContainer>
          </Wrapper>
        </_Modal>
      </Portal>
    );
  },
);
