import isString from 'lodash/isString';

import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Image } from '#lib-frontend/core/components/Image/Image';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type ItemTablePropsModel } from '#lib-frontend/data/components/ItemTable/ItemTable.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_JUSTIFY } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

export const ItemTable: LFCModel<ItemTablePropsModel> = ({ items, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      s>
      {filterNil(items).map(({ description, icon, id, image, title }) => (
        <Wrapper
          isRowAlign
          key={id}>
          {image && (
            <Image
              isAutoSize
              src={image}
              width={theme.shape.size[THEME_SIZE.MEDIUM]}
            />
          )}

          {icon && (
            <Icon
              colorRole={THEME_ROLE.MUTED}
              icon={icon}
              width={theme.shape.size[THEME_SIZE.SMALL]}
            />
          )}

          {title && <TranslatableText isEllipsis>{title}</TranslatableText>}

          <Wrapper
            align={FLEX_JUSTIFY.FLEX_END}
            flex>
            {isString(description) ? (
              <TranslatableText>{description}</TranslatableText>
            ) : (
              description
            )}
          </Wrapper>
        </Wrapper>
      ))}
    </Wrapper>
  );
};
