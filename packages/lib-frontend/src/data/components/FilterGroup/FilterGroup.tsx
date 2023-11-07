import { type ReactElement, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Dropdown } from '#lib-frontend/core/components/Dropdown/Dropdown';
import { RotatableIcon } from '#lib-frontend/core/components/RotatableIcon/RotatableIcon';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type FilterGroupPropsModel } from '#lib-frontend/data/components/FilterGroup/FilterGroup.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const FilterGroup = <TType,>({
  fields,
  icon,
  label,
  ...props
}: LFCPropsModel<FilterGroupPropsModel<TType>>): ReactElement<
  LFCPropsModel<FilterGroupPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [isOpen, isOpenSet] = useState<boolean>();
  return (
    <Dropdown
      anchor={
        <Button
          icon={icon}
          onPress={() => isOpenSet(!isOpen)}
          rightElement={
            <RotatableIcon elementState={isOpen ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE} />
          }
          size={THEME_SIZE.SMALL}
          type={BUTTON_TYPE.TRANSPARENT}>
          {label}
        </Button>
      }
      isOpen={isOpen}
      onToggle={isOpenSet}>
      <Wrapper
        {...wrapperProps}
        p
        s={THEME_SIZE.SMALL}>
        {label && <TranslatableText>{label}</TranslatableText>}

        {fields?.map((field) => <TranslatableText key={field.id}>{field.id}</TranslatableText>)}
      </Wrapper>
    </Dropdown>
  );
};
