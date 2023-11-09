import { type ReactElement } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type FilterGroupPropsModel } from '#lib-frontend/data/components/FilterGroup/FilterGroup.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const FilterGroup = <TType,>({
  fields,
  icon,
  id,
  label,
  ...props
}: LFCPropsModel<FilterGroupPropsModel<TType>>): ReactElement<
  LFCPropsModel<FilterGroupPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      {label && <TranslatableText>{label}</TranslatableText>}

      <FormContainer fields={fields} />
    </Wrapper>
  );
};
