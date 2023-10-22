import isString from 'lodash/isString';

import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type ItemTablePropsModel } from '#lib-frontend/data/components/ItemTable/ItemTable.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_ROLE } from '#lib-frontend/style/style.constants';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

export const ItemTable: LFCModel<ItemTablePropsModel> = ({ items, titleWidth, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      s>
      {filterNil(items).map(({ description, icon, id, title }) => (
        <Wrapper
          isRowAlign
          key={id}>
          {icon && (
            <Icon
              colorRole={THEME_ROLE.MUTED}
              icon={icon}
              width={20}
            />
          )}

          {title && (
            <TranslatableText
              isEllipsis
              width={titleWidth}>
              {title}
            </TranslatableText>
          )}

          {isString(description) ? <TranslatableText>{description}</TranslatableText> : description}
        </Wrapper>
      ))}
    </Wrapper>
  );
};
