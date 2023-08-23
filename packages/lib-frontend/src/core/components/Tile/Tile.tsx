import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type TilePropsModel } from '#lib-frontend/core/components/Tile/Tile.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const Tile: SFCModel<TilePropsModel> = ({
  children,
  description,
  icon,
  isBorder = true,
  onPress,
  preview,
  rightElement,
  testID,
  title,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Activatable
      style={styles}
      testID={testID}>
      {(isActive) => (
        <Wrapper
          border={isBorder}
          onPress={onPress}
          p
          round
          s={description ? THEME_SIZE.SMALL : undefined}>
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
                elementState={isActive && ELEMENT_STATE.ACTIVE}
                icon="chevronRight"
              />
            )}
          </Wrapper>

          {children}
        </Wrapper>
      )}
    </Activatable>
  );
};
