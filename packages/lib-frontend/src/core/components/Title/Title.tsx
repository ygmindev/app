import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { type TitlePropsModel } from '@lib/frontend/core/components/Title/Title.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { isTranslatableText } from '@lib/frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const Title: LFCModel<TitlePropsModel> = ({
  color,
  description,
  elementState,
  fontStyle,
  icon,
  image,
  leftElement,
  rightElement,
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      isRowAlign>
      {leftElement && <Skeleton elementState={elementState}>{leftElement}</Skeleton>}

      {image && (
        <Skeleton elementState={elementState}>
          <Image
            isAutoSize
            src={image}
            width={theme.shape.size[THEME_SIZE.MEDIUM]}
          />
        </Skeleton>
      )}

      {icon && (
        <Skeleton elementState={elementState}>
          <Icon
            color={color}
            fontStyle={fontStyle}
            icon={icon}
            width={theme.shape.size[THEME_SIZE.SMALL]}
          />
        </Skeleton>
      )}

      <Wrapper
        flex
        s={THEME_SIZE.SMALL}>
        {title && (
          <Skeleton
            elementState={elementState}
            flex>
            {isTranslatableText(title) ? (
              <TranslatableText
                color={color}
                fontStyle={fontStyle}>
                {title}
              </TranslatableText>
            ) : (
              title
            )}
          </Skeleton>
        )}

        {description && (
          <Skeleton
            elementState={elementState}
            flex>
            <TranslatableText
              color={color}
              fontStyle={fontStyle}>
              {description}
            </TranslatableText>
          </Skeleton>
        )}
      </Wrapper>

      {rightElement && <Skeleton elementState={elementState}>{rightElement}</Skeleton>}
    </Wrapper>
  );
};
