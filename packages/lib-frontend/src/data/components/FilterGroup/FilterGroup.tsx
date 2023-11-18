import { type ReactElement } from 'react';

import { Accordion } from '#lib-frontend/animation/components/Accordion/Accordion';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type FilterGroupPropsModel } from '#lib-frontend/data/components/FilterGroup/FilterGroup.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const FilterGroup = <TType,>({
  fields,
  icon,
  label,
  ...props
}: LFCPropsModel<FilterGroupPropsModel<TType>>): ReactElement<
  LFCPropsModel<FilterGroupPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Accordion
      {...wrapperProps}
      border
      defaultValue={ELEMENT_STATE.ACTIVE}
      icon={icon}
      label={label}
      round>
      <FormContainer fields={fields} />
    </Accordion>
  );
};
