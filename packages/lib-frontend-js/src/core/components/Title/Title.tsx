import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { type TitlePropsModel } from '@lib/frontend/core/components/Title/Title.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';

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
      isAlign
      isRow
      justify={FLEX_JUSTIFY.SPACE_BETWEEN}>
      <Wrapper
        isAlign
        isRow>
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

        <Wrapper s={THEME_SIZE.SMALL}>
          {title && (
            <Skeleton
              elementState={elementState}
              flex>
              {isAsyncText(title) ? (
                <AsyncText
                  color={color}
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
              <AsyncText
                color={color}
                fontStyle={fontStyle}>
                {description}
              </AsyncText>
            </Skeleton>
          )}
        </Wrapper>
      </Wrapper>

      {rightElement && <Skeleton elementState={elementState}>{rightElement}</Skeleton>}
    </Wrapper>
  );
};
