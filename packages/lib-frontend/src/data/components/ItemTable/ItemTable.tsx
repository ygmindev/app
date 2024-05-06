import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type ItemTablePropsModel } from '@lib/frontend/data/components/ItemTable/ItemTable.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import isString from 'lodash/isString';

export const ItemTable: LFCModel<ItemTablePropsModel> = ({ elementState, items, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      {filterNil(items).map(({ description, icon, id, image, title }) => (
        <Wrapper
          isAlign
          isRow
          key={id}>
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
                icon={icon}
                width={theme.shape.size[THEME_SIZE.SMALL]}
              />
            </Skeleton>
          )}

          {title && <AsyncText isEllipsis>{title}</AsyncText>}

          <Skeleton
            align={FLEX_JUSTIFY.END}
            elementState={elementState}
            flex>
            {isString(description) ? <AsyncText>{description}</AsyncText> : description}
          </Skeleton>
        </Wrapper>
      ))}
    </Wrapper>
  );
};
