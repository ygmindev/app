import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type TilePropsModel } from '#lib-frontend/core/components/Tile/Tile.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const Tile: LFCModel<TilePropsModel> = ({
  children,
  description,
  icon,
  isBorder = true,
  onPress,
  preview,
  rightElement,
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Activatable {...wrapperProps}>
      {(isActive) => (
        <Wrapper
          border={isBorder}
          onPress={onPress}
          p
          round
          s>
          <Wrapper isRowAlign>
            {preview}

            <Wrapper
              grow
              isRowAlign
              s={THEME_SIZE.SMALL}>
              <Wrapper grow>
                <Wrapper isRowAlign>
                  {icon && <Icon icon={icon} />}

                  {title && (
                    <TranslatableText
                      isEllipsis
                      type={FONT_TYPE.TITLE}>
                      {title}
                    </TranslatableText>
                  )}
                </Wrapper>

                {description && isTranslatableText(description) ? (
                  <TranslatableText isEllipsis>{description}</TranslatableText>
                ) : (
                  description
                )}
              </Wrapper>

              {rightElement}
            </Wrapper>

            {onPress && (
              <Button
                elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
                icon="chevronRight"
              />
            )}
          </Wrapper>

          <Divider />

          {children}
        </Wrapper>
      )}
    </Activatable>
  );
};
