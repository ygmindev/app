import isString from 'lodash/isString';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { KeyboardContainer } from '#lib-frontend/core/components/KeyboardContainer/KeyboardContainer';
import { _Modal } from '#lib-frontend/core/components/Modal/_Modal';
import { type ModalPropsModel } from '#lib-frontend/core/components/Modal/Modal.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '#lib-frontend/core/core.models';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Modal: FCModel<ModalPropsModel> = ({
  children,
  elementState,
  header,
  height,
  isFullSize,
  isOpen,
  onClose,
  width,
}) => {
  const theme = useTheme();
  const { height: deviceHeight, width: deviceWidth } = useStore((state) => state.app.dimension);
  return (
    <_Modal
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      elementState={elementState}
      height={height}
      isOpen={isOpen}
      onClose={onClose}
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
        grow={isFullSize}
        isFullWidth
        isShadow
        style={{
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
        }}>
        <KeyboardContainer>
          <Wrapper
            grow
            p
            position={SHAPE_POSITION.RELATIVE}
            s>
            <Wrapper isRowAlign>
              <Wrapper
                grow
                isRowAlign>
                {isString(header) ? <Text type={FONT_TYPE.TITLE}>{header}</Text> : header}
              </Wrapper>

              {onClose && (
                <Button
                  icon="times"
                  onPress={onClose}
                  type={BUTTON_TYPE.INVISIBLE}
                />
              )}
            </Wrapper>

            <Wrapper
              grow
              isCenter>
              {children}
            </Wrapper>
          </Wrapper>
        </KeyboardContainer>
      </Wrapper>
    </_Modal>
  );
};
