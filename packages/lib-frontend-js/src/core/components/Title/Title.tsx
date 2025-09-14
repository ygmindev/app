import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { type TitlePropsModel } from '@lib/frontend/core/components/Title/Title.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const Title: LFCModel<TitlePropsModel> = ({
  color,
  colorRole,
  description,
  elementState,
  fontSize,
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
  const isSmall = fontSize === THEME_SIZE.SMALL;
  return (
    <Wrapper
      {...wrapperProps}
      isAlign
      isRow
      justify={FLEX_JUSTIFY.SPACE_BETWEEN}
      p={isSmall ? THEME_SIZE.SMALL : fontSize}>
      <Wrapper
        isAlign={!description}
        isRow>
        <Wrapper isRow>
          {leftElement && <Skeleton elementState={elementState}>{leftElement}</Skeleton>}

          {image && (
            <Skeleton elementState={elementState}>
              <Image
                isAutoSize
                round={THEME_SIZE.SMALL}
                src={image}
                width={theme.shape.size[THEME_SIZE.MEDIUM]}
              />
            </Skeleton>
          )}

          {icon && (
            <Skeleton elementState={elementState}>
              <Icon
                color={color}
                fontSize={fontSize}
                fontStyle={fontStyle}
                icon={icon}
                width={theme.shape.size[isSmall ? THEME_SIZE_MORE.XSMALL : THEME_SIZE.SMALL]}
              />
            </Skeleton>
          )}
        </Wrapper>

        <Wrapper s>
          {title && (
            <Skeleton
              elementState={elementState}
              flex>
              {isAsyncText(title) ? (
                <AsyncText
                  casing={TEXT_CASING.CAPITALIZE}
                  color={color}
                  colorRole={colorRole}
                  fontSize={fontSize}
                  fontStyle={fontStyle}
                  isBold={!!description}>
                  {title}
                </AsyncText>
              ) : (
                title
              )}
            </Skeleton>
          )}

          {description && (
            <Skeleton
              elementState={elementState}
              flex>
              {isAsyncText(description) ? (
                <AsyncText
                  color={color}
                  colorRole={colorRole}>
                  {description}
                </AsyncText>
              ) : (
                description
              )}
            </Skeleton>
          )}
        </Wrapper>
      </Wrapper>

      {rightElement && <Skeleton elementState={elementState}>{rightElement}</Skeleton>}
    </Wrapper>
  );
};
