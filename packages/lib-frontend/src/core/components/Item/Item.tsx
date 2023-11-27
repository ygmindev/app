import { Skeleton } from '#lib-frontend/animation/components/Skeleton/Skeleton';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Image } from '#lib-frontend/core/components/Image/Image';
import { type ItemPropsModel } from '#lib-frontend/core/components/Item/Item.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const Item: LFCModel<ItemPropsModel> = ({
  children,
  color,
  icon,
  image,
  rightElement,
  title,
  type,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      <Wrapper isRowAlign>
        {image && (
          <Skeleton>
            <Image
              isAutoSize
              src={image}
              width={theme.shape.size[THEME_SIZE.MEDIUM]}
            />
          </Skeleton>
        )}

        {icon && (
          <Skeleton>
            <Icon
              color={color}
              icon={icon}
              type={type}
              width={theme.shape.size[THEME_SIZE.SMALL]}
            />
          </Skeleton>
        )}

        <Wrapper
          flex
          s={THEME_SIZE.SMALL}>
          <Skeleton>
            {isTranslatableText(title) ? (
              <TranslatableText
                color={color}
                type={type}>
                {title}
              </TranslatableText>
            ) : (
              title
            )}
          </Skeleton>
        </Wrapper>

        {rightElement && <Skeleton>{rightElement}</Skeleton>}
      </Wrapper>

      {isTranslatableText(children) ? <TranslatableText>{children}</TranslatableText> : children}
    </Wrapper>
  );
};
